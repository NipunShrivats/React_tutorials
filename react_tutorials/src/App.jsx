import React from "react";

import ReactBasic_tut_1 from "./Components/1_Basic/Components_Fragments_1";
import DynamicValues_2 from "./Components/1_Basic/DynamicValues_2";
import ConditionalRendring_3 from "./Components/1_Basic/ConditionalRendring_3";
import ImportExport from "./Components/1_Basic/Import_Export_4/Master";
// -----------------------------------------------------
import NetflixSeries from "./Components/2_map_in_JSX/Main";
// -----------------------------------------------------
import PropsInJSX from "./Components/3_Props/Main";
// -----------------------------------------------------
import ConditionalStyling from "./Components/4_Styling/Conditional_styling/Conditional_Styling";
import Module from "./Components/4_Styling/CSS_Modules/Module";
import StyledComponent from "./Components/4_Styling/Styled_Components/Styled_Components";
import Tailwind from "./Components/4_Styling/Tailwind/Tailwind";
// -----------------------------------------------------
import EventHandling from "./Components/5_Event_Handling/EventHandling_1";
import EventsAsProps from "./Components/5_Event_Handling/EventsAsProps_2";
import EventsPropagation from "./Components/5_Event_Handling/EventsPropagation_3";
// -----------------------------------------------------
import ReactState from "./Components/6_React_Hooks/1_React_State/Main";
import DerivedState from "./Components/6_React_Hooks/1_React_State/DerivedState";

// -----------------------------------------------------

export default function App() {
  return (
    <>
      {/* ---------------------- 1. Basic ---------------------- */}
      {/* <ReactBasic_tut_1 /> */}
      {/* <DynamicValues_2 /> */}
      {/* <ConditionalRendring_3 /> */}
      {/* <ImportExport /> */}
      {/* ---------------------- 2. React looping - map() method ---------------------- */}
      {/* <NetflixSeries /> */}
      {/* ---------------------- 3. Props ---------------------- */}
      {/* <PropsInJSX /> */}
      {/* ---------------------- 4. Conditional Styling ---------------------- */}
      {/* <ConditionalStyling /> */}
      {/* <Module /> */}
      {/* <StyledComponent /> */}
      {/* <Tailwind /> */}
      {/* ---------------------- 5. EventHandling ---------------------- */}
      {/* <EventHandling /> */}
      {/* <EventsAsProps /> */}
      {/* <EventsPropagation /> */}
      {/* ---------------------- 6. React Hooks ---------------------- */}
      {/* ---------- a. State ----------*/}
      {/* <ReactState /> */}
      {/* <SiblingComponent /> */}

      <DerivedState />
    </>
  );
}

// function SiblingComponent() {
//   console.log("Sibling Component rendered");
//   return <div>Sibling Component</div>;
// }
