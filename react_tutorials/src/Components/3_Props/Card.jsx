import React from "react";

export default function Card(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>standard: {props.standard}</h2>
      <br />
    </>
  );
}
