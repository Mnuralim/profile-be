import Achiev from "../models/AchievModel.js";

export const createAchiev = async (req, res) => {
  const { title, year } = req.body;

  try {
    const data = await Achiev.create({
      title: title,
      year: year,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateAchiev = async (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;

  try {
    const data = await Achiev.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        year: year,
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

export const deleteAchiev = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Achiev.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataAchiev = async (req, res) => {
  try {
    const data = await Achiev.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataAchiev = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Achiev.findById({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
