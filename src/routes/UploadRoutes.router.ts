import { Router } from "express";
import { uploadFile } from "../controllers/Upload.controller";
import multerMiddleware from "../middleware/File.middleware";

const UploadRouter = Router();

UploadRouter.post("/upload", multerMiddleware.single("cosechas"), uploadFile);

export default UploadRouter;
