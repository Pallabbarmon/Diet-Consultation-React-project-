import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, age, height, weight, gender } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });

    const hash = await bcrypt.hash(password, 10);

    // compute bmi & bmr if user submitted age/height/weight/gender
    let bmi = null, bmr = null;
    if (age && height && weight && gender) {
      const h = Number(height) / 100;
      if (h > 0) bmi = Number(weight) / (h * h);
      // Mifflin-St Jeor (rounded)
      if (gender.toLowerCase() === "male") {
        bmr = Math.round(10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5);
      } else {
        bmr = Math.round(10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161);
      }
    }

    const user = await User.create({
      name, email, password: hash, role: "user",
      age, height, weight, gender, bmi, bmr
    });

    res.json({
      message: "Registered",
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, role: "admin" });
    res.json({ message: "Admin Registered", user: { id: user._1, name: user.name, email: user.email, role: user.role } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "dev_secret", { expiresIn: "7d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// returns current logged-in user (protected route)
export const me = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authorized" });
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      age: user.age,
      height: user.height,
      weight: user.weight,
      gender: user.gender,
      bmi: user.bmi,
      bmr: user.bmr
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
