import { Router } from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { getAllUsers } from "../controllers/userController.js";

const router = Router();
router.get("/", protect, adminOnly, getAllUsers);
export default router;
