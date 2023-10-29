import { Router } from "express";
import { uploadFile } from "../controllers/Upload.controller";
import multerMiddleware from "../middleware/File.middleware";

export const UploadRouter = Router();

UploadRouter.post("/", multerMiddleware.single("cosechas"), uploadFile);
