import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const BookModel = new mongoose.Schema(
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
const Book = mongoose.model("Book", BookModel);
export default Book;
