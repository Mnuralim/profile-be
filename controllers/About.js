import About from "../models/AboutModel.js";

export const CreateAbout = async (req, res) => {
  const { name, wifeName, firstchild, secondchild, thirdchild, fourthchild, birth } = req.body;
  const file = req.file;
  const url = file.path;
  try {
    const data = await About.create({
      name: name,
      wifeName: wifeName,
      firstchild: firstchild,
      secondchild: secondchild,
      thirdchild: thirdchild,
      fourthchild: fourthchild,
      birt: birth,
      images: url,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const UpdateAbout = async (req, res) => {
  const { id } = req.params;
  const { name, wifeName, firstchild, secondchild, thirdchild, fourthchild, birth } = req.body;
  const file = req.file;
  const url = file.path;
  try {
    const data = await About.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        wifeName: wifeName,
        firstchild: firstchild,
        secondchild: secondchild,
        thirdchild: thirdchild,
        fourthchild: fourthchild,
        birt: birth,
        images: url,
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

export const GetDataAbout = async (req, res) => {
  try {
    const data = await About.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
