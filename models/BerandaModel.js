import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const BerandaModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
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
const Beranda = mongoose.model("Beranda", BerandaModel);
export default Beranda;
