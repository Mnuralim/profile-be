import Book from "../models/BookModel.js";

export const createBook = async (req, res) => {
  const { title, year } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await Book.create({
      title: title,
      year: year,
      image: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await Book.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        year: year,
        image: url,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Book.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataBook = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataBook = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Book.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
