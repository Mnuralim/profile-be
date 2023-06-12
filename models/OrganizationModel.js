import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const OrganizationModel = new mongoose.Schema(
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
const Organization = mongoose.model("Organization", OrganizationModel);
export default Organization;
