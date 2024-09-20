const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db"); // MongoDB connection
const User = require("./models/User"); // Import User model
const bcrypt = require("bcrypt"); // Import bcrypt for hashing passwords
const jwt = require("jsonwebtoken"); // Import JWT for generating tokens

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const JWT_SECRET = "shhhhh"; // Hardcoding secret for now (in a production environment, make sure to secure this better)

// Route: User Sign-up
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user and save to database
    user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    const payload = { userId: user._id };
    const token = jwt.sign(payload, JWT_SECRET);

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Route: User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Test route for protected routes
app.get("/dashboard", (req, res) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId;
    res.json({ message: "Access granted to protected route!" });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
