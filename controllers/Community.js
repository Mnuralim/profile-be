import Community from "../models/CommunityModel.js";

export const postCommunity = async (req, res) => {
  const { name, address, message } = req.body;
  try {
    const data = await Community.create({
      name: name,
      address: address,
      message: message,
    });
    res.status(200).json({ message: "Sukses", data });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getCommunityData = async (req, res) => {
  try {
    const data = await Community.find().sort({ address: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteCommunity = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Community.findByIdAndDelete({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
