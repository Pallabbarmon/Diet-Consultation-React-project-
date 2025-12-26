import { Router } from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { createPlan, getUserPlans } from "../controllers/planController.js";

const router = Router();
router.post("/:userId", protect, adminOnly, createPlan);
router.get("/me", protect, getUserPlans);
export default router;
