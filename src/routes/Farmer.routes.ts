import express, { Request, Response } from "express";

export const FarmerRouter = express.Router();

FarmerRouter.get("/", (_req: Request, res: Response) => {
  res.send("Feteching all Farmes");
});

FarmerRouter.post("/", (_req: Request, res: Response) => {
  res.send("Saving a Farmer");
});
