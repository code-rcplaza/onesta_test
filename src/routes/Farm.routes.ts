import express, { Request, Response } from "express";

export const FarmRouter = express.Router();

FarmRouter.get("/", (_req: Request, res: Response) => {
  res.send("Feteching all Farms");
});

FarmRouter.post("/", (_req: Request, res: Response) => {
  res.send("Saving a Farm");
});
