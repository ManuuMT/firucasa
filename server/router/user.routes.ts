import { Router } from "express";
import { RegisterUser, Login, Logout, Profile } from "../controllers";
import { authRequired } from "../middlewares/validateToken";

const router = Router();

router.post("/register", RegisterUser);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/profile", authRequired, Profile);

export default router;
