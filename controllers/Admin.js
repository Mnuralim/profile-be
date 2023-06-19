import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAdmin = async (req, res) => {
  const { name, password, username, email } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const data = await Admin.create({
      email: email,
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
  const { name, password, username, email } = req.body;
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
