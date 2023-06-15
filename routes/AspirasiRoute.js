import express from "express";
import { deleteAspirasi, getAspirasiData, postAspirasi } from "../controllers/Aspirasi.js";

const router = express.Router();

router.post("/post", postAspirasi);
router.get("/get-data", getAspirasiData);
router.delete("/delete-data/:id", deleteAspirasi);

export default router;
