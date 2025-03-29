// process of capturing and responding to user interactions, such as clicks, keystrokes or form submissions.
// React uses synthetic events for cross-browser compatibility.

// synthetic events ??
// :- while handling event in react, a Synthetic Event is wrapped around the component to make sure event behave the same in all browsers, aka cross-browser compatibility.

import React from "react";

export default function EventHandling() {
  let handleBtnClick = (event) => {
    alert("hey I was clicked");
    console.log(event); // gives synthetic event in console
  };

  let handleName = (nam) => {
    alert(`My name is ${nam}.`);
  };
  return (
    <>
      {/* type1 */}
      <button onClick={handleBtnClick}>click Me</button>
      <br />
      <br />
      {/* type2 */}
      <button onClick={() => alert("I trigger 2nd event")}>click Me</button>
      <button onClick={(event) => console.log(event)}>click Me</button>
      <br /> <br />
      {/* type3 - this will not give event object until event is passed  */}
      <button onClick={() => handleBtnClick()}>click Me</button>
      <button onClick={(event) => handleBtnClick(event)}>click Me</button>
      <br />
      <br />
      {/* type4 - in case of arguments have to use arrow function in event */}
      <button onClick={() => handleName("Nipun")}>click Me</button>
      <br />
      <br />
    </>
  );
}
