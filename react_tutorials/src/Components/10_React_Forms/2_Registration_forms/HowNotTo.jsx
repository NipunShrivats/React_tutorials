import React from "react";
import "./Style.css";

export default function HowNotTo() {
  return (
    <>
      <form action="">
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
            />
          </div>

          <div className="data-field">
            <label htmlFor="phone">
              <b>phone Number</b>
            </label>
            <input type="phone" name="phone" placeholder="+91 ..." required />
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
