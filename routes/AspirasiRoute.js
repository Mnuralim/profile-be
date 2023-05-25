import express from "express";
import { getAspirasiData, postAspirasi } from "../controllers/Aspirasi.js";

const router = express.Router();

router.post("/post", postAspirasi);
router.get("/get-data", getAspirasiData);

export default router;
