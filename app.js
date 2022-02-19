import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import {atripeRouter} from "./router/router.js"
const app = express();

app.use(morgan('dev'))
app.use(helmet())

app.use('/atripe', atripeRouter);

app.listen(8080);