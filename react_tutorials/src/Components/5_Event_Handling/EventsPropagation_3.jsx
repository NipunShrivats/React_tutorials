// Event Propagartion//
// Refers to the process of how events propagate or travel through the "DOM".

// 3 phases of event propagation :-
// 1. capturing phase - Event strats form Root to the target element (top to bottom)
// 2. bubbling phase - Event strats form target element to the Root (bottom to top) [by default]
// 3. target phase - the event reaches the target element

import React from "react";
import "./EventsPropagation.css";

export default function EventsPropagation_3() {
  const handleGrandParent = (event) => {
    event.stopPropagation(); // not needed here as it is the top root element
    console.log("Grand Parent clicked");
  };
  const handleParent = (event) => {
    event.stopPropagation();
    console.log("Parent clicked");
  };
  const handleChild = (event) => {
    event.stopPropagation(); // will stop default behaviour of bubbling phase
    console.log("Child clicked");
  };
  return (
    <>
      <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <span>GrandParent Div</span>
          <div className="p-div" onClick={handleParent}>
            <span>Parent Div</span>
            <div className="c-div" onClick={handleChild}>
              <span>Child Div</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
