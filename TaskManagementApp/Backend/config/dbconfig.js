const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected succesfully");
  } catch (err) {
    console.log("The error is : ", err);
  }
};

module.exports = dbconnect;
