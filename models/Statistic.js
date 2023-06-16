import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const StatisticModel = new mongoose.Schema(
  {
    numbOfView: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Statistic = mongoose.model("Statistic", StatisticModel);
export default Statistic;
