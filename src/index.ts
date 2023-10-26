import { app } from "./app";

const PORT = process.env.PORT || 5000;

const main = () => {
  try {
    app.listen(PORT, () => console.log("Server ON"));
  } catch (error) {
    console.error(error);
  }
};

main();
