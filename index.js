import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./config/db.js";
import AspirasiRouter from "./routes/AspirasiRoute.js";

dotenv.config();

const app = express();
db();

app.use(cors());
app.use(express.json());
app.use(AspirasiRouter);
app.listen(process.env.PORT, () => console.log("server is running..."));
