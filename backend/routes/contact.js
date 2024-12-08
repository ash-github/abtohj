// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/contact"); // Assuming the Contact model is in models/contact.js

// POST route to submit contact form
router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  try {
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving contact form data", error: err });
  }
});

// GET route to fetch all contact form submissions
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts); // Return the contacts array as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching contact data", error: err });
  }
});

module.exports = router;
