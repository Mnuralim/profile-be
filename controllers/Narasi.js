import Narasi from "../models/NarasiModel.js";

export const createNarasi = async (req, res) => {
  const { title, year, place, article } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await Narasi.create({
      title: title,
      year: year,
      place: place,
      article: article,
      image: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateNarasi = async (req, res) => {
  const { id } = req.params;
  const { title, year, place, article } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await Narasi.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        year: year,
        place: place,
        article: article,
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

export const deleteNarasi = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Narasi.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataNarasi = async (req, res) => {
  try {
    const data = await Narasi.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataNarasi = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Narasi.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
