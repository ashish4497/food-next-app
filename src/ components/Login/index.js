"use client";
import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAuth } from "@/store/slice/authSlice/authActionSlice";
import { useRouter } from "next/navigation";

export default function LoginUser() {
  const router = useRouter();
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
    const resp = await dispatch(loginUserAuth(userDetail));
    const acessToken = resp.payload.token;
    if (acessToken) {
      localStorage.setItem("token", acessToken);
      router.push("/");
    } else {
      alert("ashish");
    }
  };

  const handleregister = () => {
    router.push("/register");
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
          required
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={userDetail.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <button>Login</button>
        <p className="registration-link" onClick={handleregister}>
          Register user
        </p>
      </form>
    </div>
  );
}
