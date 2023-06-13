import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const AboutModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    wifeName: {
      type: String,
      required: true,
    },
    firstchild: {
      type: String,
      required: true,
    },
    secondchild: {
      type: String,
    },
    thirdchild: {
      type: String,
    },
    fourthchild: {
      type: String,
    },
    birth: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const About = mongoose.model("About", AboutModel);
export default About;
