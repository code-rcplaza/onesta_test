import { Request, Response } from "express";
import { Farmer } from "../entities";
import { findAllFarmers, insertFarmer } from "../services";

export const getAllFarmers = async (_req: Request, res: Response) => {
  try {
    const farmers: Farmer[] = await findAllFarmers();
    res.send(farmers);
  } catch (error) {
    console.error(error);
  }
};

export const createFarmer = async (req: Request, res: Response) => {
  try {
    const { name, lastname, email } = req.body;
    const farmer = new Farmer();
    farmer.name = name;
    farmer.lastname = lastname;
    farmer.email = email;

    const successfulCreation = await insertFarmer(farmer);
    res.send(successfulCreation);
  } catch (error) {
    console.error(error);
  }
};
