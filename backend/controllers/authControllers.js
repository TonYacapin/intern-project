const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.register = (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: "Hashing failed" });

    userModel.createUser(email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ error: "User already exists" });
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, (err, results) => {
    if (err || results.length === 0)
      return res.status(400).json({ error: "User not found" });

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) return res.status(400).json({ error: "Invalid password" });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful", token });
    });
  }); 
};




