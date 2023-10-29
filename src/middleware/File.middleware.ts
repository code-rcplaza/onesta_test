import { Request } from "express";
import multer, { diskStorage } from "multer";
import { generateFilenameWithDate } from "../utils/File.uitl";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(_req: Request, _file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(_req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameWithDate = generateFilenameWithDate(`cosechas.${ext}`);
    cb(null, fileNameWithDate);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
