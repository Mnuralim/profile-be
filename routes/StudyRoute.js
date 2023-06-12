import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createStudy, deleteStudy, getDataStudy, getSingleDataStudy, updateStudy } from "../controllers/Study.js";

const router = express.Router();

router.post("/add-study", upload.single("image"), createStudy);
router.put("/update-study/:id", upload.single("image"), updateStudy);
router.get("/get-study", getDataStudy);
router.get("/get-study/:id", getSingleDataStudy);
router.delete("/delete-study/:id", deleteStudy);

export default router;
