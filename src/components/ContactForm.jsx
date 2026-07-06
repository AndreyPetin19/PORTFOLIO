import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});

    setTimeout(() => {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 500);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      {errors.name && <p className="form-error">{errors.name}</p>}

      <input
        type="email"
        placeholder="Your email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      {errors.email && <p className="form-error">{errors.email}</p>}

      <textarea
        rows="6"
        placeholder="Your message"
        name="message"
        value={form.message}
        onChange={handleChange}
      />

      {errors.message && <p className="form-error">{errors.message}</p>}

      <button className="btn primary">
        Send Message
      </button>

      {success && (
        <p className="success-message">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}

export default ContactForm;