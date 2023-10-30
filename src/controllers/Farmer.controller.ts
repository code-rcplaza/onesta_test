import { Request, Response } from "express";
import { Farmer } from "../entities";
import {
  findAllFarmers,
  findFarmer,
  insertFarmer,
} from "../services/Farmer.service";
import { handleHttpError } from "../utils/httpErrorhandler.util";

export const getAllFarmers = async (_req: Request, res: Response) => {
  try {
    const farmers: Farmer[] = await findAllFarmers();
    res.send(farmers);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_FARMERS");
  }
};

export const getFarmer = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const farmer = await findFarmer(id);

    res.send(farmer);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_FARMER");
  }
};

export const createFarmer = async (req: Request, res: Response) => {
  try {
    const { name, lastname, email } = req.body;
    const farmer = new Farmer();
    farmer.name = name;
    farmer.lastname = lastname;
    farmer.mail = email;

    const successfulCreation = await insertFarmer(farmer);
    res.send(successfulCreation);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_FARMER");
  }
};
