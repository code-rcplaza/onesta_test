import { Client } from "../entities";

export const findAllClients = async () => {
  const clients: Client[] = await Client.find();
  return clients;
};

export const findClient = async (id: number) => {
  const client = await Client.findOneBy({ id });
  return client;
};

export const insertClient = async (client: Client) => {
  const responseInsert = client.save();
  return responseInsert;
};
