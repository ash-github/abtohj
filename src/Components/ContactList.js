// src/ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://65.2.82.56/api/contact');
        setContacts(response.data); // Save the fetched data in the state
        setLoading(false);
      } catch (err) {
        setError('Error fetching contact data');
        setLoading(false);
        console.error("Error fetching data:", err); // Log the error for debugging
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Error handling
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="contact-list">
      <h2>Contact Form Submissions</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
