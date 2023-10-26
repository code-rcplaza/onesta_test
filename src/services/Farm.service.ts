import { Farm } from "../entities";

export const findAllFarms = async () => {
  const farms: Farm[] = await Farm.find();
  return farms;
};

export const insertFarm = async (farm: Farm) => {
  const responseInsert = farm.save();
  return responseInsert;
};
