const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: false },
    add: { type: String, required: false },
    gender:{type:String, required:false},
    phone:{type:Number, required:false},
    photo:{type:Buffer, required:false},
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
