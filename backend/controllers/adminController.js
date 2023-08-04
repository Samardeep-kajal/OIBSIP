const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

const registerAdmin = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      email,
      username,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin user created successfully" });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginAdmin, registerAdmin };
