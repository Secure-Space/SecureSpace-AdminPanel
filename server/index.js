const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const helmet = require('helmet');

require('dotenv').config();

const User = require("./models/user.model");

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/secure-space");

app.post("/api/signup", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/signin", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  try{if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_KEY
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }}
  catch (err) {
    console.log(err)
    console.log(process.env.JWT_KEY)
  }

  
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
