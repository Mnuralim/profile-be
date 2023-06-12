import Study from "../models/StudyModel.js";

export const createStudy = async (req, res) => {
  const { title, year } = req.body;
  const file = req.file;
  const url = file.path;

  try {
    const data = await Study.create({
      title: title,
      year: year,
      image: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateStudy = async (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;
  const file = req.file;
  const url = file.path;

  try {
    const data = await Study.findByIdAndUpdate(
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

export const deleteStudy = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Study.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataStudy = async (req, res) => {
  try {
    const data = await Study.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataStudy = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Study.findById({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
