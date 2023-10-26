import { Request, Response } from "express";
import { FruitSize } from "../entities";
import { findFruit } from "../services/Fruit.service";
import {
  findAllFruitSizes,
  findFruitSize,
  insertFruitSize,
} from "../services/FruitSize.service";
import { handleHttpError } from "../utils/httpErrorhandler.util";

export const getAllFruitSize = async (_req: Request, res: Response) => {
  try {
    const fruitSizes: FruitSize[] = await findAllFruitSizes();
    res.send(fruitSizes);
  } catch (error) {
    handleHttpError(res, "ERROR_GETTING_FRUITSIZES");
  }
};

export const getFruitSize = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const fruit = await findFruitSize(id);

    res.send(fruit);
  } catch (error) {
    handleHttpError(res, "ERROR_GETTING_FRUIT");
  }
};

export const createFruitSize = async (req: Request, res: Response) => {
  try {
    const { size, fruitID } = req.body;

    const fruit = await findFruit(fruitID);

    if (!fruit) {
      handleHttpError(res, "FRUIT_NOT_FOUND");
      return;
    }

    const fruitSize = new FruitSize();
    fruitSize.size = size;
    fruitSize.fruit = fruit;

    const successfulCreation = await insertFruitSize(fruitSize);
    res.send(successfulCreation);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATING_FRUIT");
  }
};
