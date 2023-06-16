import express from "express";
import { upload } from "../middleware/uploadImages.js";
import { createBook, deleteBook, getDataBook, getSingleDataBook, updateBook } from "../controllers/Book.js";

const router = express.Router();

router.post("/add-book", upload.single("image"), createBook);
router.put("/update-book/:id", upload.single("image"), updateBook);
router.get("/get-book", getDataBook);
router.get("/get-book/:id", getSingleDataBook);
router.delete("/delete-book/:id", deleteBook);

export default router;
