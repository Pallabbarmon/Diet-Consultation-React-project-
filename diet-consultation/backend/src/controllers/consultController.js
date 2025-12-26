import Consult from "../models/Consult.js";

export const requestConsult = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ message: "message required" });
    const consult = await Consult.create({
      user: req.user._id,
      message,
    });
    res.json({ message: "Consultation requested", consult });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getAllConsults = async (req, res) => {
  try {
    const consults = await Consult.find().populate("user", "name email").sort({ createdAt: -1 });
    res.json(consults);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const replyConsult = async (req, res) => {
  try {
    const { reply } = req.body;
    const consult = await Consult.findByIdAndUpdate(
      req.params.id,
      { reply, repliedBy: req.user._id },
      { new: true }
    );
    res.json({ message: "Reply sent", consult });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
