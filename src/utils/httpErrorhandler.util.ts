import { Response } from "express";

export const handleHttpError = (res: Response, error: string) => {
  res.status(500);
  res.send({ error });
};
