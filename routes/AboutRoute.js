import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { CreateAbout, GetDataAbout, UpdateAbout } from "../controllers/About.js";

const router = express.Router();

router.post("/add-about", upload.single("image"), CreateAbout);
router.put("/update-about/:id", upload.single("image"), UpdateAbout);
router.get("/get-about", GetDataAbout);

export default router;
