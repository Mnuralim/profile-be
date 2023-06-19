import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./config/db.js";
import AspirasiRouter from "./routes/AspirasiRoute.js";
import BerandaRouter from "./routes/BerandaRoute.js";
import AboutRouter from "./routes/AboutRoute.js";
import WorkHistoryRouter from "./routes/WorkHistoryRoute.js";
import OrganizationRouter from "./routes/OrganizationRoute.js";
import StudyRouter from "./routes/StudyRoute.js";
import IlmiahRouter from "./routes/IlmiahRoute.js";
import AchievRouter from "./routes/AchievRoute.js";
import NarasiRouter from "./routes/NarasiRoute.js";
import GalleryPhotoRoute from "./routes/GalleryPhotoRoute.js";
import GalleryVideoRoute from "./routes/GalleryVideoRoute.js";
import BookRouter from "./routes/BookRoute.js";
import StatsRouter from "./routes/StatisticRoute.js";
import CommunityRouter from "./routes/CommunityRoute.js";
import AdminRouter from "./routes/AdminRoute.js";
import morgan from "morgan";

dotenv.config();

const app = express();
db();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(AspirasiRouter);
app.use(BerandaRouter);
app.use(AboutRouter);
app.use(WorkHistoryRouter);
app.use(StudyRouter);
app.use(BookRouter);
app.use(IlmiahRouter);
app.use(AchievRouter);
app.use(NarasiRouter);
app.use(GalleryVideoRoute);
app.use(GalleryPhotoRoute);
app.use(OrganizationRouter);
app.use(StatsRouter);
app.use(CommunityRouter);
app.use(AdminRouter);

app.listen(process.env.PORT, () => console.log("server is running..."));
