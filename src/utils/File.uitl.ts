import csv from "csvtojson";
import { FileDataRow, Size } from "../types";

export const generateFilenameWithDate = (filename: String) => {
  const currentDate = new Date();
  const formatedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, "");
  return `${formatedDate}-${filename}`;
};

export const generateDataToCSVFile = async (storedFilePath: string) => {
  const jsonData: FileDataRow[] = await csv({ delimiter: ";" }).fromFile(
    storedFilePath
  );

  return jsonData;
};

export const groupByCategory = (data: FileDataRow[]) => {
  const pooledData = data.map((item) => ({
    farmer: {
      name: item["Nombre Agricultor"],
      lastname: item["Apellido Agricultor"],
      mail: item["Mail Agricultor"],
    },
    client: {
      name: item["Nombre Cliente"],
      lastname: item["Apellido Cliente"],
      mail: item["Mail Cliente"],
    },
    farm: {
      name: item["Nombre Campo"],
      location: item["Ubicación de Campo"],
    },
    fruitSize: {
      name: item["Fruta Cosechada"],
      size: item["Variedad Cosechada"] as Size,
    },
  }));

  return pooledData;
};
