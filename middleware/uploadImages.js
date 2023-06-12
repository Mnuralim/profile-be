import cloudinary from "../utils/cloudinary.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "portofolio",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50000000,
  },
});
