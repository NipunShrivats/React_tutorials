import React, { useState } from "react";
import "./Style.css";

export default function HowTo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>

          <div className="data-field">
            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter firstname"
              required
              value={user.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="data-field">
            <label htmlFor="lastName">
              <b>last Name</b>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter lastname"
              required
              value={user.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="data-field">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              value={user.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="data-field">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={user.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="data-field">
            <label htmlFor="phone">
              <b>phone Number</b>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+91 ..."
              required
              value={user.phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue", marginLeft: ".2rem" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="data-field">
            <button type="sumit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
