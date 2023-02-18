import { Router } from "express";
import { getUsers } from "../controllers/users.controllers";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from express");
});

router.get("/users", getUsers);
// router.get("/users/:id", getSinglePost);
// router.post("/users", createPost);
// router.put("/users/:id", updatePost);
// router.delete("/users/:id", deletePost);

export default router;
