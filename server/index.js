const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//AWS and image processing packages
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3");
const sharp = require("sharp");

const config = require("./config.json");
require('dotenv').config();


const User = require("./models/user.model");

// PORT and EXPRESS
const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

async function startServer(){
  await mongoose.connect(process.env.MONGO_URL);
  
  app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
}
startServer();


// S3 BUCKET
const s3 = new aws.S3({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region
});




// AWS configuration and image processing
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'testingrekognition1234',
    acl: 'public-read', 
    ContentType: 'image/jpeg',
    contentDisposition:'attachment',
    shouldTransform: function (req, file, cb) {
      cb(null, /^image/i.test(file.mimetype))
    },
    transforms: [{
      id: 'original',
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      },
      transform: function (req, file, cb) {
        cb(null, sharp().resize(800, 800).jpeg())
      }
    }]
  })
});

app.post('/api/upload', async (req, res) => {
  try {
    await upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      return res.json({ message: 'File uploaded successfully' });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post('/api/upload', async (req, res) => {
  try {
    await upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      return res.json({ message: 'File uploaded successfully' });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});



// SIGNUP API
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


// SIGNIN API
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


// PROFILE API
app.get("/api/profile", async (req, res) => {
  const token = req.headers['x-access-token']

  try{
  const decoded = jwt.verify(token, process.env.JWT_KEY)
  const name = decoded.name
  // const email = decoded.email
  const user = await User.findOne({name:name})
  return res.json({status:'ok', name:user.name, email:user.email})
  }
  catch(error){
    console.log(error)
    console.log(process.env.JWT_KEY)
  }
});



