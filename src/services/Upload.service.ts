import { StorageHistory } from "../entities/StorageHistory.entity";

export const registerUpload = async (historyRow: StorageHistory) => {
  const responseInsert = await historyRow.save();
  return responseInsert;
};
