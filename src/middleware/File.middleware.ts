import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(_req: Request, _file: Express.Multer.File, callback: any) {
    callback(null, PATH_STORAGE);
  },
  filename(_req: Request, file: Express.Multer.File, callback: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `cosechas.${ext}`;
    callback(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
