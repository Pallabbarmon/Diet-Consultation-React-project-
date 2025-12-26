import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/auth.js";

import userRoutes from "./src/routes/users.js";
import planRoutes from "./src/routes/plans.js";
import consultRoutes from "./src/routes/consult.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN?.split(",") || "*",
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => { console.log("➡️", req.method, req.originalUrl); next(); });

app.get("/", (req, res) => res.send("Diet Consultation API OK"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/consult", consultRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ API running on http://localhost:${PORT}`));
});
