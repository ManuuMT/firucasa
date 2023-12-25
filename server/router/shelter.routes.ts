import { Router } from "express";
import {
  CreateShelter,
  GetShelter,
  GetAllShelters,
  UpdateShelter,
  DeleteShelter,
} from "../controllers";
import { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello from express");
});

router.get("/shelter", GetAllShelters);
router.get("/shelter/:id", GetShelter);
router.post("/shelter", CreateShelter);
router.put("/shelter/:id", UpdateShelter);
router.delete("/shelter/:id", DeleteShelter);

export default router;
