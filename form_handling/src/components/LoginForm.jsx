import React, { useState } from "react";

// onSubmit , user email and password (credentials)
const LoginForm = ({ onSubmit, credentials }) => {
  //  { onSubmit }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("This is required");
      return;
    }

    if (
      credentials &&
      formData.email === credentials.email &&
      formData.password === credentials.password
    ) {
      onSubmit(credentials);
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div style={{ padding: "30px", border: "2px solid white" }}>
      <h1 style={{ color: "white" }}>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "90%",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
