import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const WorkHistoryModel = new mongoose.Schema(
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
const WorkHistory = mongoose.model("WorkHistory", WorkHistoryModel);
export default WorkHistory;
