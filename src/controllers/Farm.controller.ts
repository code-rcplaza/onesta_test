import { Request, Response } from "express";
import { Farm } from "../entities";
import { findAllFarms, insertFarm } from "../services/Farm.service";
import { findFarmer } from "../services/Farmer.service";
import { handleHttpError } from "../utils/httpErrorhandler.util";

export const getAllFarms = async (_req: Request, res: Response) => {
  try {
    const farms: Farm[] = await findAllFarms();
    res.send(farms);
  } catch (error) {
    handleHttpError(res, "ERROR_GETTING_FARMS");
  }
};

export const createFarm = async (req: Request, res: Response) => {
  try {
    const { name, location, farmerID } = req.body;
    const farmer = await findFarmer(farmerID);

    if (!farmer) {
      handleHttpError(res, "FARMER_NOT_FOUND");
      return;
    }

    const farm = new Farm();
    farm.name = name;
    farm.location = location;
    farm.farmer = farmer;

    const successfulCreation = await insertFarm(farm);
    res.send(successfulCreation);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATING_FARM");
  }
};
