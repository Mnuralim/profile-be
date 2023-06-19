import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAdmin = async (req, res) => {
  const { name, password, username } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const data = await Admin.create({
      name: name,
      password: hashPassword,
      username: username,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, password, username } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const data = await Admin.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        password: hashPassword,
        username: username,
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

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Admin.findByIdAndDelete({ _id: id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDataAdmin = async (req, res) => {
  try {
    const data = await Admin.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSingleDataAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Admin.findById({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const findAdmin = await Admin.findOne({ username: username });
    if (!findAdmin) return res.status(404).json({ message: "Data Tidak Ditemukan" });
    const match = await bcrypt.compare(password, findAdmin.password);
    if (!match) return res.status(400).json({ message: "Password Salah" });

    const id = findAdmin._id;
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const refreshtoken = jwt.sign({ id, username }, process.env.REFRESH_SECRET, {
      expiresIn: "1d",
    });

    await Admin.findByIdAndUpdate(
      { _id: id },
      {
        refreshtoken: refreshtoken,
      },
      {
        new: true,
      }
    );

    res.cookie("refreshtoken", refreshtoken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json({
      message: "sukses",
      data: {
        username: findAdmin.username,
        name: findAdmin.name,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
