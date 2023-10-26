import { Request, Response } from "express";
import { FruitSize } from "../entities";
import { findFruit } from "../services/Fruit.service";
import {
  findAllFruitSizes,
  findFruitSize,
  insertFruitSize,
} from "../services/FruitSize.service";

export const getAllFruitSize = async (_req: Request, res: Response) => {
  try {
    const fruitSizes: FruitSize[] = await findAllFruitSizes();
    res.send(fruitSizes);
  } catch (error) {
    console.error(error);
  }
};

export const getFruitSize = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const fruit = await findFruitSize(id);

    res.send(fruit);
  } catch (error) {
    console.log(error);
  }
};

export const createFruitSize = async (req: Request, res: Response) => {
  try {
    const { size, fruitID } = req.body;

    const fruit = await findFruit(fruitID);

    if (!fruit) {
      res.status(404).send("Fruit not found");
      return;
    }

    const fruitSize = new FruitSize();
    fruitSize.size = size;
    fruitSize.fruit = fruit;

    const successfulCreation = await insertFruitSize(fruitSize);
    res.send(successfulCreation);
  } catch (error) {
    console.error(error);
  }
};
