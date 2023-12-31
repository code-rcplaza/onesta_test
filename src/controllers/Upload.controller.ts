import { Request, Response } from "express";
import { StorageHistory } from "../entities/StorageHistory.entity";
import { registerUpload } from "../services/Upload.service";
import {
  generateDataToCSVFile,
  generateFilenameWithDate,
  groupByCategory,
} from "../utils/File.uitl";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const { file } = req;

    if (!file) return res.status(400).send("No file uploaded");

    const registrationData = new StorageHistory();
    registrationData.fileName = generateFilenameWithDate(`${file?.filename}`);

    const generatedRawData = await generateDataToCSVFile(`${req.file?.path}`);

    groupByCategory(generatedRawData);

    const response = await registerUpload(registrationData);
    return res.send(response);
  } catch (e) {
    console.error(e);
  }
};
