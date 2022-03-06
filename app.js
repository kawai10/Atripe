import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { atripeRouter } from "./router/router.js";
import { sequelize } from "./connection/dbConnection.js";
import { config } from "./config/config.js";
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/atripe", atripeRouter);

sequelize.sync();
app.listen(config.host.port);
