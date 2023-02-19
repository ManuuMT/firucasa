import { Router } from "express";
import {
  GetAllUsers,
  CreateUser,
  GetSingleUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/users.controllers";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from express");
});

router.get("/users", GetAllUsers);
router.get("/users/:id", GetSingleUser);
router.post("/users", CreateUser);
router.put("/users/:id", UpdateUser);
router.delete("/users/:id", DeleteUser);

export default router;
