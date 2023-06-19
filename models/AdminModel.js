import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const AdminModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    refreshtoken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Admin = mongoose.model("Admin", AdminModel);
export default Admin;
