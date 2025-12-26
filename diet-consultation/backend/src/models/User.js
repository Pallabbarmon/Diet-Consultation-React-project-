import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user","admin"], default: "user" },
  age: Number,
  height: Number, // cm
  weight: Number, // kg
  gender: { type: String, enum: ["male","female"] },
  bmi: Number,
  bmr: Number
}, { timestamps: true });

export default mongoose.model("User", userSchema);
