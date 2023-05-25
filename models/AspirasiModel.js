import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const AspirasiModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Aspirasi = mongoose.model("Aspirasi", AspirasiModel);
export default Aspirasi;
