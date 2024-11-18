"use client";
import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAuth } from "@/store/slice/authSlice";

export default function LoginUser() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUserAuth(userDetail));
  };

  return (
    <div className="parent-container">
      <h2> Login </h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="user Name"
          name="email"
          value={userDetail.email}
          onChange={(e) => handleChange(e)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={userDetail.password}
          onChange={(e) => handleChange(e)}
        />
        <button>Login</button>
        <p className="registration-link">Registeruser</p>
      </form>
    </div>
  );
}
