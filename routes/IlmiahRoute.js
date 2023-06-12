import express from "express";
import { createIlmiah, deleteIlmiah, getDataIlmiah, getSingleDataIlmiah, updateIlmiah } from "../controllers/Ilmiah.js";

const router = express.Router();

router.post("/add-ilmiah", createIlmiah);
router.put("/update-ilmiah/:id", updateIlmiah);
router.get("/get-ilmiah", getDataIlmiah);
router.get("/get-ilmiah/:id", getSingleDataIlmiah);
router.delete("/delete-ilmiah/:id", deleteIlmiah);

export default router;
