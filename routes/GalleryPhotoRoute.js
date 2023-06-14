import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createGallery, deleteGallery, getDataGallery, getSingleDataGallery, updateGallery } from "../controllers/GalleryPhoto.js";

const router = express.Router();

router.post("/add-gallery-photo", upload.single("image"), createGallery);
router.put("/update-gallery-photo/:id", upload.single("image"), updateGallery);
router.get("/get-gallery-photo", getDataGallery);
router.get("/get-gallery-photo/:id", getSingleDataGallery);
router.delete("/delete-gallery-photo/:id", deleteGallery);

export default router;
