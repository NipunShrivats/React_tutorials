import React from "react";

export default function Uncontrolled() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataValue = document.querySelector("#inputName").value;
    console.log(dataValue);
  };
  return (
    <>
      <section>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Name:
            <input type="text" id="inputName" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
