import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const StudyModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
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
const Study = mongoose.model("Study", StudyModel);
export default Study;
