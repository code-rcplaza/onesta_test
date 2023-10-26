import express from "express";
import {
  createFarmer,
  getAllFarmers,
  getFarmer,
} from "../controllers/Farmer.controller";

export const FarmerRouter = express.Router();

FarmerRouter.get("/", getAllFarmers);

FarmerRouter.get("/:id", getFarmer);

FarmerRouter.post("/", createFarmer);
