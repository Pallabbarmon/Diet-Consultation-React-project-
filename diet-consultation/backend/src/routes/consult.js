import { Router } from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { requestConsult, getAllConsults, replyConsult } from "../controllers/consultController.js";

const router = Router();
router.post("/", protect, requestConsult);
router.get("/", protect, adminOnly, getAllConsults);
router.post("/:id/reply", protect, adminOnly, replyConsult);
export default router;
