import { Request, Response } from "express";
import { Farm } from "../entities";
import { findAllFarms, insertFarm } from "../services";

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
    const { name, location } = req.body;
    const farm = new Farm();
    farm.name = name;
    farm.location = location;

    const successfulCreation = await insertFarm(farm);
    res.send(successfulCreation);
  } catch (error) {
    console.error(error);
  }
};
