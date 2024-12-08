// frontend/src/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  // Use a single state to manage the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // For displaying server response
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input field changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://65.2.82.56/api/contact", formData);
      setResponseMessage(response.data.message); // Show success message
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      setResponseMessage("Error submitting the form. Please try again.");
    }
  }

  return (
    <div>
      {/* Modal Search */}
      
      {/* Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Contact Us
          </h3>
          <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <a href="index.html" className="text-white">Home</a>
            </li>
            <li className="breadcrumb-item active text-secondary">Contact</li>
          </ol>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container-fluid contact overflow-hidden py-5">
        <div className="container py-5">
          <div className="row g-5 mb-5">
            {/* Left Side */}
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="sub-style">
                <h5 className="sub-title text-primary pe-3">Quick Contact</h5>
              </div>
              <h1 className="display-5 mb-4">
                Have Questions? Don't Hesitate to Contact Us
              </h1>
              <div className="d-flex border-bottom mb-4 pb-4">
                <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded"></i>
                <div className="ps-3">
                  <h5>Location</h5>
                  <p>Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi, Nagpur</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
              <div className="sub-style">
                <h5 className="sub-title text-primary pe-3">Let’s Connect</h5>
              </div>
              <h1 className="display-5 mb-4">Send Your Message</h1>

              {/* Display response message */}
              {responseMessage && <p>{responseMessage}</p>}

              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-12 pt-5 wow zoomIn" data-wow-delay="0.1s">
            <div className="rounded h-100">
              <iframe
                className="rounded w-100"
                style={{ height: "500px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29767.47526858055!2d79.05886734245988!3d21.15500843230557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11d142e6ac9%3A0xbb23c4288c53121c!2sPSK%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1723526132727!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
