import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findAdmin = await Admin.findOne({ email: email });
    if (!findAdmin) return res.status(404).json({ message: "Data Tidak Ditemukan" });
    const match = await bcrypt.compare(password, findAdmin.password);
    if (!match) return res.status(400).json({ message: "Password Salah" });

    const id = findAdmin._id;
    const token = jwt.sign({ _id: id, email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const refreshtoken = jwt.sign({ __id: id, email }, process.env.REFRESH_SECRET, {
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

    res.cookie("refreshToken", refreshtoken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json({
      message: "sukses",
      data: {
        email: findAdmin.email,
        name: findAdmin.name,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
