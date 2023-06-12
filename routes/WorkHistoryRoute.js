import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createWorkHistory, deleteWorkHistory, getDataWorkHistory, getSingleDataWorkHistory, updateWorkHistory } from "../controllers/WorkHistory.js";

const router = express.Router();

router.post("/add-workhistory", upload.single("image"), createWorkHistory);
router.put("/update-workhistory/:id", upload.single("image"), updateWorkHistory);
router.get("/get-workhistory", getDataWorkHistory);
router.get("/get-workhistory/:id", getSingleDataWorkHistory);
router.delete("/delete-workhistory/:id", deleteWorkHistory);

export default router;
