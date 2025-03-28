import React from "react";
import "./style.css";

export default function Conditional_Styling() {
  // let rating = 8.5;
  let rating = 8.4;

  // object based CSS
  const heading_style = {
    padding: "1.2rem 2.4rem",
    border: "2px solid red",
  };

  return (
    <>
      {/* object based is used */}
      <h1 style={heading_style}>Title</h1>

      {/* here conditional is used */}
      <h2>
        rating:{" "}
        <span className={`extra ${rating >= 8.5 ? "good" : "avg"}`}>
          {rating}
        </span>
      </h2>
      <button className={`extra ${rating >= 8.5 ? "good" : "avg"}`}>
        Watch Now
      </button>
    </>
  );
}
