"use client";
import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/slice/authSlice/authActionSlice";
import { useRouter } from "next/navigation";

export default function RegisteruserForm() {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const handleregister = async (e) => {
    e.preventDefault();
    // setRegistredUsers((prevRegisteredUsers) => [
    //   ...prevRegisteredUsers,
    //   userDetail,
    // ]);
    await dispatch(registerUser(userDetail));
  };

  const handleLoginredirect = () => {
    router.push("/login");
  };
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
            required
          />
          <label>Email</label>
          <input
            typeof="email"
            placeholder="Email"
            name="email"
            value={userDetail.email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Phone</label>
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            value={userDetail.phone}
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Address</label>
          <textarea
            rows="3"
            cols="80"
            placeholder="Address"
            name="address"
            value={userDetail.address}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={userDetail.password}
            onChange={(e) => handleChange(e)}
          />
          <button>Register</button>
        </form>
        <p className="registration-link" onClick={handleLoginredirect}>
          Already registter then Login
        </p>
      </div>
    </>
  );
}
