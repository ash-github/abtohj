import React, { useState } from 'react';

function PostComment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  });

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message
    const message = `*New Comment*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Website:* ${formData.website}\n` +
      `*Comment:* ${formData.comment}`;

    const phoneNumber = '8080724453';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <section id="comment-form" className="comment-form section">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h4>Post Comment</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <input
                  name="website"
                  type="text"
                  className="form-control"
                  placeholder="Your Website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <textarea
                  name="comment"
                  className="form-control"
                  placeholder="Your Comment*"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Post Comment</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PostComment;
