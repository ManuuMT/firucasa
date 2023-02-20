import { Router } from "express";
import {
  GetAllDogs,
  CreateDog,
  GetSingleDog,
  UpdateDog,
  DeleteDog,
} from "../controllers/dogs.controllers";

const router = Router();

router.get("/dogs", GetAllDogs);
router.get("/dogs/:id", GetSingleDog);
router.post("/dogs", CreateDog);
router.put("/dogs/:id", UpdateDog);
router.delete("/dogs/:id", DeleteDog);

export default router;
