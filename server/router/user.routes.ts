import { Router } from "express";
import { CreateUser, Login } from "../controllers";

const router = Router();

router.post("/user", CreateUser);
router.post("/login", Login);

export default router;
