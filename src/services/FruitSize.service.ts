import { FruitSize } from "../entities";

export const findAllFruitSizes = async () => {
  const fruitSizes: FruitSize[] = await FruitSize.find();
  return fruitSizes;
};

export const findFruitSize = async (id: number) => {
  const fruitSize = await FruitSize.findOneBy({ id });
  return fruitSize;
};

export const insertFruitSize = async (fruitSize: FruitSize) => {
  const responseInsert = fruitSize.save();
  return responseInsert;
};
