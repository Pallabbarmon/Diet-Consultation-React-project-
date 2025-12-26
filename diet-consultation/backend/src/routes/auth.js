import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { register, login, me, registerAdmin } from "../controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/register-admin", registerAdmin);
router.post("/login", login);
router.get("/me", authMiddleware, me);

export default router;
