import express from "express";
import { deleteCommunity, getCommunityData, postCommunity } from "../controllers/Community.js";

const router = express.Router();

router.post("/post-community", postCommunity);
router.get("/get-community", getCommunityData);
router.delete("/delete-community/:id", deleteCommunity);

export default router;
