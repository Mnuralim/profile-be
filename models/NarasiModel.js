import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const NarasiModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Narasi = mongoose.model("Narasi", NarasiModel);
export default Narasi;
