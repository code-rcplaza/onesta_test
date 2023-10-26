import { Farmer } from "../entities";

export const findAllFarmers = async () => {
  const farmers: Farmer[] = await Farmer.find();
  return farmers;
};

export const findFarmer = async (id: number) => {
  const farmer = await Farmer.findOneBy({ id });
  return farmer;
};

export const insertFarmer = async (farmer: Farmer) => {
  const responseInsert = farmer.save();
  return responseInsert;
};
