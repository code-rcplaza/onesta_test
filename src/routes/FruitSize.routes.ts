import express from "express";
import {
  createFruitSize,
  getAllFruitSize,
  getFruitSize,
} from "../controllers/FruitSize.entity";

export const FruitSizeRouter = express.Router();

FruitSizeRouter.get("/", getAllFruitSize);

FruitSizeRouter.get("/:id", getFruitSize);

FruitSizeRouter.post("/", createFruitSize);
