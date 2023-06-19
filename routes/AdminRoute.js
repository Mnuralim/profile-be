import express from "express";
import { Login, createAdmin, deleteAdmin, getDataAdmin, getSingleDataAdmin, updateAdmin } from "../controllers/Admin.js";

const router = express.Router();

router.post("/add-admin", createAdmin);
router.put("/update-admin/:id", updateAdmin);
router.get("/get-admin", getDataAdmin);
router.get("/get-admin/:id", getSingleDataAdmin);
router.delete("/delete-admin/:id", deleteAdmin);

router.post("/login", Login);

export default router;
