import express from "express";
import { createStatistic, getStatistic, updateStatistic } from "../controllers/Statistic.js";

const router = express.Router();

router.post("/create-stats", createStatistic);
router.put("/update-stats", updateStatistic);
router.get("/get-stats", getStatistic);

export default router;
