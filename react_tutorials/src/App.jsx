import React from "react";
import ReactBasic_tut_1 from "./Components/1_Basic/Components_Fragments_1";
import DynamicValues_2 from "./Components/1_Basic/DynamicValues_2";
import ConditionalRendring_3 from "./Components/1_Basic/ConditionalRendring_3";
import ImportExport from "./Components/1_Basic/Import_Export_4/Master";
import NetflixSeries from "./Components/2_map_in_JSX/Main";
import PropsInJSX from "./Components/3_Props/Main";

export default function App() {
  return (
    <>
      {/* ---------------------- 1 Basic ---------------------- */}

      {/* <ReactBasic_tut_1 /> */}
      {/* <DynamicValues_2 /> */}
      {/* <ConditionalRendring_3 /> */}
      {/* <ImportExport /> */}

      {/* ---------------------- 2 react looping - map() method ---------------------- */}
      {/* <NetflixSeries /> */}

      {/* ---------------------- 3 props ---------------------- */}
      <PropsInJSX />
    </>
  );
}
