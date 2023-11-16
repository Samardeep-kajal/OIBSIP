const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const User = require("../models/userModel");
const express = require("express");
const app = express();

const randString = () => {
  const len = 8;
  let randStr = "";
  for (var i = 0; i < len; i++) {
    const ch = Math.floor(Math.random() * 10 + 1);
    randStr += ch;
  }
  return randStr;
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const uniqueString = randString();
    // const isVerified = false;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      // isVerified,
      // uniqueString,
    });

    await newUser.save();
    // sendVerificationEmail(email, uniqueString);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const sendVerificationEmail = async (email, unqiueString) => {
  try {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,

      auth: {
        user: process.env.NM_USER,
        pass: process.env.NM_PASS,
      },
    });
    const mailOptions = {
      from: '"SavvySlice" <mailverifywithme@gmail.com>',
      to: email,
      subject: "Account Verification",
      html: `
        <p>Hello,</p>
        <p>Please click the following link to verify your account:</p>
        <a href="http://localhost:5005/verify/${unqiueString}">Verify Account</a>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email Sent: %s", mailOptions.messageId);
  } catch (error) {
    console.error("Error Sending verification mail: ", error);
  }
};

app.get("/verify/:uniqueString", async (req, res) => {
  const { uniqueString } = req.params;
  const user = await User.findOne({ unqiueString: uniqueString });
  if (user) {
    user.isVerified = true;
    await user.save();
  } else {
    res.json("User not found");
  }
});

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    const currentUser = {
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      _id: user._id,
      token: token,
    };
    res.status(200).send(currentUser);
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.body;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const email = decodedToken.email;

    const user = await User.findOneAndUpdate(
      { email, isVerified: false },
      { $set: { isVerified: true } }
    );

    if (!user) {
      return res.status(400).json({ message: "Invalid Verification Token" });
    }

    res.status(200).json({ message: "Email Verified Successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Function for sending forgot password email
const sendForgotPasswordEmail = async (email, resetToken) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.NM_USER,
        pass: process.env.NM_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NM_USER,
      to: email,
      subject: "Reset Password",
      html: `
        <p>Hello,</p>
        <p>Please click the following link to reset your password:</p>
        <a href="http://localhost:5005/reset/${resetToken}">Reset Password</a>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending forgot password email: ", error);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const resetToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    sendForgotPasswordEmail(email, resetToken);

    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
};

module.exports = {
  registerUser,
  loginUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getAllUsers,
};
