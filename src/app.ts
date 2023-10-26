import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import morgan from "morgan";

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  console.log("Someone pinged here!!");
  res.send("pong");
});
