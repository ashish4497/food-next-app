"use client";
import React, { useState } from "react";
import "./style.css";

export default function RegisteruserForm() {
  const [registeredUser, setRegistredUsers] = useState([]);
  const [userDetail, setUserDetail] = useState({
    userName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  const handleregister = (e) => {
    e.preventDefault();
    setRegistredUsers((prevRegisteredUsers) => [
      ...prevRegisteredUsers,
      userDetail,
    ]);
  };

  console.log(registeredUser);

  return (
    <>
      <div className="container">
        <form onSubmit={handleregister} className="flex">
          <h2>User Regestration </h2>
          <label>User Name</label>
          <input
            className="flex"
            type="text"
            placeholder="Enter User Name"
            name="userName"
            value={userDetail.userName}
            onChange={(e) => handleChange(e)}
          />
          <label>Email</label>
          <input
            typeof="email"
            placeholder="Email"
            name="email"
            value={userDetail.email}
            onChange={(e) => handleChange(e)}
          />
          <label>Phone</label>
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            value={userDetail.phone}
            onChange={(e) => handleChange(e)}
          />
          <label>Address</label>
          <textarea
            rows="4"
            cols="50"
            placeholder="Address"
            name="address"
            value={userDetail.address}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={userDetail.phone}
            onChange={(e) => handleChange(e)}
          />
          <button>Register</button>
        </form>
        <p className="registration-link">Already registter then Login</p>
      </div>
    </>
  );
}
