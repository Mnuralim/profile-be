import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createGallery, deleteGallery, getDataGallery, getSingleDataGallery, updateGallery } from "../controllers/Gallery.js";

const router = express.Router();

router.post("/add-gallery", upload.single("image"), createGallery);
router.put("/update-gallery/:id", upload.single("image"), updateGallery);
router.get("/get-gallery", getDataGallery);
router.get("/get-gallery/:id", getSingleDataGallery);
router.delete("/delete-gallery/:id", deleteGallery);

export default router;
