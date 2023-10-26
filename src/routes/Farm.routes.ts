import express, { Request, Response } from "express";
import { createFarm } from "../controllers/Farm.controller";

export const FarmRouter = express.Router();

FarmRouter.get("/", (_req: Request, res: Response) => {
  res.send("Feteching all Farms");
});

FarmRouter.post("/", createFarm);
