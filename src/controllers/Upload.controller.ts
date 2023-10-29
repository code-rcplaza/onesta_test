import { Request, Response } from "express";
import { StorageHistory } from "../entities/StorageHistory.entity";
import { registerUpload } from "../services/Upload.service";
import { handleHttpError } from "../utils/httpErrorhandler.util";
import { generateFilenameWithDate } from "../utils/renameUploadedFile.util";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const { file } = req;
    const registrationData = new StorageHistory();
    const newFilename = generateFilenameWithDate(`${file?.filename}`);
    registrationData.filename = newFilename;

    const response = await registerUpload(registrationData);
    return res.send(response);
  } catch (e) {
    handleHttpError(res, "ERROR_UPLOAD_FILE");
  }
};
