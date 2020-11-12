import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions";

// todo: Formdata constructor

function readForm() {
  let registerFirstName = document.getElementById("registerFirstName").value;
  let registerLastName = document.getElementById("registerLastName").value;
  let registerEmail = document.getElementById("registerEmail").value;
  let registerPassword = document.getElementById("registerPassword").value;
  return {
    fname: registerFirstName,
    lname: registerLastName,
    email: registerEmail,
    password: registerPassword,
  };
}

export default function Register() {
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(register(readForm()));
      }}
    >
      <h2>Register</h2>

      <label htmlFor="registerFirstName">First Name:</label>
      <input type="text" id="registerFirstName" name="firstName" value="test" />

      <label htmlFor="registerLastName">Last Name:</label>
      <input type="text" id="registerLastName" name="lastName" value="test" />

      <label htmlFor="registerEmail">Email:</label>
      {/* <input type="email" id="registerEmail" name="email" /> */}
      <input type="text" id="registerEmail" name="email" value="test" />

      <label htmlFor="registerPassword">Password:</label>
      {/* <input type="password" id="registerPassword" name="password" /> */}
      <input type="text" id="registerPassword" name="password" value="test" />

      <button type="submit">Register</button>
    </form>
  );
}
