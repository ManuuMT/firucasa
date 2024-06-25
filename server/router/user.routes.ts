import { Router } from "express";
import {
    RegisterUser,
    Login,
    Logout,
    GetProfile,
    VerifyToken
} from "../controllers";
import { authRequired } from "../middlewares/validateToken";

const router = Router();

router.post("/register", RegisterUser);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/profile", authRequired, GetProfile);
router.get("/verify", VerifyToken);

export default router;
