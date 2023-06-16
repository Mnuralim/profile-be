import Statistic from "../models/Statistic.js";

export const updateStatistic = async (req, res) => {
  const id = "648c6ad11178fe1e4f29ba1a";

  try {
    let getData = await Statistic.findById({ _id: id });
    let numbOfView = getData.numbOfView;
    let newNumbOfView = numbOfView + 1;
    const data = await Statistic.findByIdAndUpdate(
      { _id: id },
      {
        numbOfView: newNumbOfView,
      },
      {
        new: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStatistic = async (req, res) => {
  const { numbOfView } = req.body;
  try {
    const data = await Statistic.create({
      numbOfView: numbOfView,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStatistic = async (req, res) => {
  const id = "648c6ad11178fe1e4f29ba1a";
  try {
    const data = await Statistic.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
