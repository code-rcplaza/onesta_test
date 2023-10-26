import { DataSource } from "typeorm";

export const AppDataSouce = new DataSource({
  type: "sqlite",
  database: "src/data/main.sqlite",
  logging: true,
  entities: ["src/entities/**/*.ts"],
  subscribers: [],
  migrations: ["src/migrations/**/*.ts"], // TODO: GENERAR AL MOMENTO DE GENERAR CAMBIOS EN TABLAS YA PUESTAS EN PROD
  synchronize: true,
});
