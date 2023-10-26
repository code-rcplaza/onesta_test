import { Request, Response } from "express";
import { Fruit } from "../entities";
import {
  findAllFruits,
  findFruit,
  insertFruit,
} from "../services/Fruit.service";
import { handleHttpError } from "../utils/httpErrorhandler.util";

export const getAllFruits = async (_req: Request, res: Response) => {
  try {
    const fruits: Fruit[] = await findAllFruits();
    res.send(fruits);
  } catch (error) {
    handleHttpError(res, "ERROR_GETTING_ALL_FRUITS");
  }
};

export const getFruit = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const fruit = await findFruit(id);

    res.send(fruit);
  } catch (error) {
    handleHttpError(res, "ERROR_GETTING_FRUIT");
  }
};

export const createFruit = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const fruit = new Fruit();

    fruit.name = name;

    const successfulCreation = await insertFruit(fruit);
    res.send(successfulCreation);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATING_FRUIT");
  }
};
