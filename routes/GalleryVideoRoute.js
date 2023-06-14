import express from "express";
import { createGallery, deleteGallery, getDataGallery, getSingleDataGallery, updateGallery } from "../controllers/GalleryVideo.js";

const router = express.Router();

router.post("/add-gallery-video", createGallery);
router.put("/update-gallery-video/:id", updateGallery);
router.get("/get-gallery-video", getDataGallery);
router.get("/get-gallery-video/:id", getSingleDataGallery);
router.delete("/delete-gallery-video/:id", deleteGallery);

export default router;
