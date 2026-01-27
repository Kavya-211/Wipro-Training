import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setMessageSent(true); // Show success message
    e.target.reset(); // Clear the form fields
  };

  return (
    <div className="contact-container">
      <h1>Contact VeggieMart</h1>

      <p className="contact-desc">
        We’re happy to help you with fresh vegetables and orders.
      </p>

      {/* Contact Details */}
      <div className="contact-details">
        <p><strong>Email:</strong> support@veggiemart.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
      </div>

      {/* Small Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="3" required></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Success Message */}
      {messageSent && (
        <p className="success-message">
          Thank you! Your message has been sent successfully. We will get back to you soon.
        </p>
      )}
    </div>
  );
}

export default Contact;
