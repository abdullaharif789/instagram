const mongoose = require("mongoose");
const connectDatabase = () => {
  try {
    mongoose.connect("mongodb://0.0.0.0:27017/instagram", () => {
      console.log("DB connected successfully.");
    });
  } catch (error) {
    console.log("Error in DB connection:", error);
  }
};
module.exports = connectDatabase;
