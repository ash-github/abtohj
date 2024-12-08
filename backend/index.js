// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Initialize the app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/psk', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, () => {
//   console.log('Connected to MongoDB');
// });

// // Contact Form Schema
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   subject: String,
//   message: String,
// });

// const Contact = mongoose.model('Contact', contactSchema);

// // API to insert data into MongoDB
// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email, phone, subject, message } = req.body;
//     const newContact = new Contact({ name, email, phone, subject, message });
//     await newContact.save();
//     res.status(201).json({ message: 'Contact form submitted successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving contact form data', error });
//   }
// });

// // API to fetch data from MongoDB
// app.get('/api/contact', async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching contact data', error });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
