import Gallery from "../models/GalleryVideoModel.js";

export const createGallery = async (req, res) => {
  const { title, url } = req.body;

  try {
    const data = await Gallery.create({
      title: title,
      url: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateGallery = async (req, res) => {
  const { id } = req.params;
  const { title, url } = req.body;

  try {
    const data = await Gallery.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        url: url,
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

export const deleteGallery = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Gallery.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataGallery = async (req, res) => {
  try {
    const data = await Gallery.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataGallery = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Gallery.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
