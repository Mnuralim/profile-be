import WorkHistory from "../models/WorkHistoryModel.js";

export const createWorkHistory = async (req, res) => {
  const { title, year } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await WorkHistory.create({
      title: title,
      year: year,
      image: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateWorkHistory = async (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await WorkHistory.findByIdAndUpdate(
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

export const deleteWorkHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await WorkHistory.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataWorkHistory = async (req, res) => {
  try {
    const data = await WorkHistory.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataWorkHistory = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await WorkHistory.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
