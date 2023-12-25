import { Router } from "express";
import {
  GetAllDogs,
  GetDog,
  CreateDog,
  UpdateDog,
  DeleteDog,
} from "../controllers/dog.controllers";

const router = Router();

router.get("/dogs", GetAllDogs);
// router.get("/dogs/:id", GetDog);
router.post("/dogs", CreateDog);
// router.put("/dogs/:id", UpdateDog);
// router.delete("/dogs/:id", DeleteDog);

export default router;
