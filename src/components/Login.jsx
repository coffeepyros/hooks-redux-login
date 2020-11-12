import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert, login, loginSuccess, showAlert } from "../redux/actions";

// todo: Formdata constructor
// Form data needs to be already in the store / hook, when "LOGIN" is clicked.

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(login(formData));
        let found = users.filter((user) => {
          return (
            formData.email === user.email && formData.password === user.password
          );
        });
        console.log("FOUND FROM LOGIN.JSX:", found);
        if (found.length !== 0) {
          // dispatch(hideAlert());
          dispatch(loginSuccess());
        } else dispatch(showAlert());
      }}
    >
      <h2>Login</h2>

      <p>test/test is the only combination that works after Registration</p>

      <label htmlFor="loginEmail">Email:</label>
      {/* <input type="email" name="email" id="email" /> */}
      <input
        type="text"
        name="email"
        id="loginEmail"
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />

      <label htmlFor="loginPassword">Password:</label>
      {/* <input type="password" name="password" id="password" /> */}
      <input
        type="text"
        name="password"
        id="loginPassword"
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />

      <button type="submit">Login</button>
    </form>
  );
}
