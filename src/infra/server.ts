import "reflect-metadata";
import "dotenv/config";

import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 8081;
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.info(`API running on port ${PORT}`);
});
