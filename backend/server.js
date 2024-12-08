// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));


// Change to explicit CORS configuration
app.use(
  cors({
    origin: [
      "http://65.2.82.56:3000",
      "http:65.2.82.56:3001",
      "http://localhost:3000",
      "http://65.2.82.56:30000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// Routes
app.use("/api/contact", contactRoute);


// MongoDB Connection with error handling
const mongoURI =
  "mongodb+srv://githubashwini:YbV2QoE3W9V4jGtJ@cluster0.yxxe4.mongodb.net/abc";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Test Database");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });


  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });

  // Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Test server running on port ${PORT}`);
  });
