import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createNarasi, deleteNarasi, getDataNarasi, getSingleDataNarasi, updateNarasi } from "../controllers/Narasi.js";

const router = express.Router();

router.post("/add-narasi", upload.single("image"), createNarasi);
router.put("/update-narasi/:id", upload.single("image"), updateNarasi);
router.get("/get-narasi", getDataNarasi);
router.get("/get-narasi/:id", getSingleDataNarasi);
router.delete("/delete-narasi/:id", deleteNarasi);

export default router;
