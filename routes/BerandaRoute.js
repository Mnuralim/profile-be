import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { AddBeranda, UpdateBeranda, getDataBeranda } from "../controllers/Beranda.js";

const router = express.Router();

router.post("/add-beranda", upload.single("image"), AddBeranda);
router.put("/update-beranda/:id", upload.single("image"), UpdateBeranda);
router.get("/get-beranda", getDataBeranda);

export default router;
