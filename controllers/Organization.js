import Organization from "../models/OrganizationModel.js";

export const createOrganization = async (req, res) => {
  const { title, year } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await Organization.create({
      title: title,
      year: year,
      image: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateOrganization = async (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;
  const file = req.file;
  const url = file?.path;

  try {
    const data = await Organization.findByIdAndUpdate(
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

export const deleteOrganization = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Organization.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataOrganization = async (req, res) => {
  try {
    const data = await Organization.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataOrganization = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Organization.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
