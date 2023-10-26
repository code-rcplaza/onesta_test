import { app } from "./app";
import { AppDataSouce } from "./settings/AppDataSource";

const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    await AppDataSouce.initialize();
    if (AppDataSouce.isInitialized) {
      console.log("Successful connection");
    }
    app.listen(PORT, () => console.log("Server ON"));
  } catch (error) {
    console.error(error);
  }
};

main();
