import express from "express";
import { createFarm, getAllFarms } from "../controllers/Farm.controller";

export const FarmRouter = express.Router();

FarmRouter.get("/", getAllFarms);

FarmRouter.post("/", createFarm);
