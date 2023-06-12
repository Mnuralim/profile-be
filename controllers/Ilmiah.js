import Ilmiah from "../models/IlmiahModel.js";

export const createIlmiah = async (req, res) => {
  const { title, year } = req.body;

  try {
    const data = await Ilmiah.create({
      title: title,
      year: year,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateIlmiah = async (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;

  try {
    const data = await Ilmiah.findByIdAndUpdate(
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

export const deleteIlmiah = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Ilmiah.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataIlmiah = async (req, res) => {
  try {
    const data = await Ilmiah.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataIlmiah = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Ilmiah.findById({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
