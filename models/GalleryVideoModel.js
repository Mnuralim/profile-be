import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const GalleryModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Gallery = mongoose.model("GalleryVideo", GalleryModel);
export default Gallery;
