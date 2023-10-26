import { Farmer } from "../entities";

export const findAllFarmers = async () => {
  const farmers: Farmer[] = await Farmer.find();
  return farmers;
};

export const insertFarmer = async (farmer: Farmer) => {
  const responseInsert = farmer.save();
  return responseInsert;
};
