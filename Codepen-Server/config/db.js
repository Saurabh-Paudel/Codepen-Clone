// db.js
const mongoose = require("mongoose");

// MongoDB URI
const MONGO_URI = "mongodb://localhost:27017/CodePenClone";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process if the connection fails
  }
};

module.exports = connectDB;
