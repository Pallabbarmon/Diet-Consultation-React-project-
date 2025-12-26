import mongoose from "mongoose";

export default async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/diet_consultation";
  await mongoose.connect(uri, { });
  console.log("MongoDB connected");
}
