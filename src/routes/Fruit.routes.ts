import express from "express";
import {
  createFruit,
  getAllFruits,
  getFruit,
} from "../controllers/Fruit.controller";

export const FruitRouter = express.Router();

FruitRouter.get("/", getAllFruits);

FruitRouter.get("/:id", getFruit);

FruitRouter.post("/", createFruit);
