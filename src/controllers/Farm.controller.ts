import { Request, Response } from "express";
import { Farm } from "../entities";
import { findAllFarms, insertFarm } from "../services/Farm.service";
import { findFarmer } from "../services/Farmer.service";

export const getAllFarms = async (_req: Request, res: Response) => {
  try {
    const farms: Farm[] = await findAllFarms();
    res.send(farms);
  } catch (error) {
    console.error(error);
  }
};

export const createFarm = async (req: Request, res: Response) => {
  try {
    const { name, location, farmerID } = req.body;
    const farmer = await findFarmer(farmerID);

    if (farmer === null) return res.status(404).send("FARMER_NOT_FOUND");

    const farm = new Farm();
    farm.name = name;
    farm.location = location;
    farm.farmer = farmer;

    const successfulCreation = await insertFarm(farm);
    res.send(successfulCreation);
  } catch (error) {
    console.error(error);
  }
};
