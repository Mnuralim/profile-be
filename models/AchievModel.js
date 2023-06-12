import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const AchievModel = new mongoose.Schema(
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
const Achiev = mongoose.model("Achiev", AchievModel);
export default Achiev;
