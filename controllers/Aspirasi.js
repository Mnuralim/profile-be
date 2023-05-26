import Aspirasi from "../models/AspirasiModel.js";

export const postAspirasi = async (req, res) => {
  const { name, address, message } = req.body;
  try {
    const data = await Aspirasi.create({
      name: name,
      address: address,
      message: message,
    });
    res.status(200).json({ message: "Sukses", data });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAspirasiData = async (req, res) => {
  try {
    const data = await Aspirasi.find().sort({ address: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.mesaage);
  }
};
