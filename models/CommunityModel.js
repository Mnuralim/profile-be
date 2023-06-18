import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const CommunityModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Community = mongoose.model("Community", CommunityModel);
export default Community;
