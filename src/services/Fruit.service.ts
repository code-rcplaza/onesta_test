import { Fruit } from "../entities";

export const findAllFruits = async () => {
  const fruits: Fruit[] = await Fruit.find();
  return fruits;
};

export const findFruit = async (id: number) => {
  const fruit = await Fruit.findOneBy({ id });
  return fruit;
};

export const insertFruit = async (fruit: Fruit) => {
  const responseInsert = fruit.save();
  return responseInsert;
};
