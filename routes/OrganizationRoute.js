import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createOrganization, deleteOrganization, getDataOrganization, getSingleDataOrganization, updateOrganization } from "../controllers/Organization.js";

const router = express.Router();

router.post("/add-organization", upload.single("image"), createOrganization);
router.put("/update-organization/:id", upload.single("image"), updateOrganization);
router.get("/get-organization", getDataOrganization);
router.get("/get-organization/:id", getSingleDataOrganization);
router.delete("/delete-organization/:id", deleteOrganization);

export default router;
