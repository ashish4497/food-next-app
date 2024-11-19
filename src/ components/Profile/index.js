"use client";
import React, { useState } from "react";
import "./style.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2 className="formTitle">Update User Information</h2>

      <div style={{ marginBottom: "16px" }} className="formGroup">
        <label
          className="label"
          htmlFor="userName"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Username:
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Enter your username"
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          className="label"
          htmlFor="phone"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          className="label"
          htmlFor="address"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Address:
        </label>
        <textarea
          className="textarea"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minHeight: "100px",
          }}
        />
      </div>
      <button type="submit" className="button">
        Update
      </button>
    </form>
  );
};

export default UserForm;
