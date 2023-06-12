import express from "express";
import { createAchiev, deleteAchiev, getDataAchiev, getSingleDataAchiev, updateAchiev } from "../controllers/Achiev.js";

const router = express.Router();

router.post("/add-achiev", createAchiev);
router.put("/update-achiev/:id", updateAchiev);
router.get("/get-achiev", getDataAchiev);
router.get("/get-achiev/:id", getSingleDataAchiev);
router.delete("/delete-achiev/:id", deleteAchiev);

export default router;
