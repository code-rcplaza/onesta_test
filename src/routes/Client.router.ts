import express from "express";
import {
  createClient,
  getAllClients,
  getClient,
} from "../controllers/Client.controller";

export const ClientRouter = express.Router();

ClientRouter.get("/", getAllClients);

ClientRouter.get("/:id", getClient);

ClientRouter.post("/", createClient);
