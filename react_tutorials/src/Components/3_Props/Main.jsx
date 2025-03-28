import React from "react";
import Card from "./Card";
import Desc from "./Destructuring";
export default function Main() {
  return (
    <>
      {/* Card */}
      {/* <Card name={"Suresh"} age={99} class={"3rd"} />
      <Card name={"Kunal"} age={33} class={"4rd"} />
      <Card name={"Ayan"} age={11} standard={"11th"} /> */}

      {/* ----------------- */}
      <Desc name={"Suresh"} age={99} class={"3rd"} />
      <Desc name={"Kunal"} age={33} class={"4rd"} />
      <Desc name={"Ayan"} age={11} standard={"11th"} />
      {/* ----------------- */}
    </>
  );
}
