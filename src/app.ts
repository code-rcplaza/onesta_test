import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import {
  ClientRouter,
  FarmRouter,
  FarmerRouter,
  FruitRouter,
  FruitSizeRouter,
} from "./routes";

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/farmers", FarmerRouter);
app.use("/api/farms", FarmRouter);
app.use("/api/fruits", FruitRouter);
app.use("/api/fruitSizes", FruitSizeRouter);
app.use("/api/clients", ClientRouter);
