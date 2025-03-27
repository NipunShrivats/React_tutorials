import React from "react";
import Main1 from "./Main1"; // Default Import
import { Main2 } from "./Main2"; // Named Import
import Main3, { ExtraVariable } from "./Main3"; //Mixed Import

export default function Main4() {
  return (
    <>
      {/* 1. Default Export and Import */}
      <Main1 />
      {/* 2. Named Export and Import */}
      <Main2 />
      {/* 3. Mixed Export and Import */}
      <Main3 />
      <ExtraVariable />
    </>
  );
}
