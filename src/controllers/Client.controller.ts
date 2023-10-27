import { Request, Response } from "express";
import { Client } from "../entities";
import {
  findAllClients,
  findClient,
  insertClient,
} from "../services/Client.service";
import { handleHttpError } from "../utils/httpErrorhandler.util";

export const getAllClients = async (_req: Request, res: Response) => {
  try {
    const clients: Client[] = await findAllClients();
    res.send(clients);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CLIENT");
  }
};

export const getClient = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const client = await findClient(id);

    res.send(client);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CLIENT");
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const { name, lastname, email } = req.body;

    const client = new Client();

    client.name = name;
    client.lastname = lastname;
    client.email = email;

    const successfulCreation = await insertClient(client);
    res.send(successfulCreation);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_CLIENT");
  }
};
