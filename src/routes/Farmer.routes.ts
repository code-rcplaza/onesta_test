import express, { Request, Response } from "express";
import { createFarmer, getFarmer } from "../controllers/Farmer.controller";

export const FarmerRouter = express.Router();

FarmerRouter.get("/", (_req: Request, res: Response) => {
  res.send("Feteching all Farmes");
});

FarmerRouter.get("/:id", getFarmer);

FarmerRouter.post("/", createFarmer);
