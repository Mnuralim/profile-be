import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const IlmiahModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Ilmiah = mongoose.model("Ilmiah", IlmiahModel);
export default Ilmiah;
