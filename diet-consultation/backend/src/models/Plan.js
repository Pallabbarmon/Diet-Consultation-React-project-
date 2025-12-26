import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  meals: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Plan", planSchema);
