import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    return message.trim().length >= 10;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Invalid email address",
      });
    } else if (name === "message") {
      setErrors({
        ...errors,
        message: validateMessage(value)
          ? ""
          : "Message must be at least 10 characters",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isMessageValid = validateMessage(formData.message);

    if (!isEmailValid || !isMessageValid) {
      setErrors({
        email: isEmailValid ? "" : "Invalid email address",
        message: isMessageValid ? "" : "Message must be at least 10 characters",
      });
      return;
    }

    console.log("Form submitted successfully!", formData);
    alert("Form submitted successfully!");
    setFormData({ email: "", message: "" });
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <span>{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
