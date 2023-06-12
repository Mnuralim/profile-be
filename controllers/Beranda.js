import Beranda from "../models/BerandaModel.js";

export const AddBeranda = async (req, res) => {
  const { name, position, description } = req.body;
  const file = req.file;
  const url = file.path;

  try {
    const data = await Beranda.create({
      name: name,
      position: position,
      description: description,
      image: url,
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const UpdateBeranda = async (req, res) => {
  const { id } = req.params;
  const { name, position, description } = req.body;
  const file = req.file;
  const url = file.path;
  try {
    const data = await Beranda.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        position: position,
        description: description,
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

export const getDataBeranda = async (req, res) => {
  try {
    const data = await Beranda.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
