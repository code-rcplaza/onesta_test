import { Request, Response } from "express";
import { Fruit } from "../entities";
import {
  findAllFruits,
  findFruit,
  insertFruit,
} from "../services/Fruit.service";

export const getAllFruits = async (_req: Request, res: Response) => {
  try {
    const fruits: Fruit[] = await findAllFruits();
    res.send(fruits);
  } catch (error) {
    console.error(error);
  }
};

export const getFruit = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const fruit = await findFruit(id);

    res.send(fruit);
  } catch (error) {
    console.log(error);
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
    console.error(error);
  }
};
