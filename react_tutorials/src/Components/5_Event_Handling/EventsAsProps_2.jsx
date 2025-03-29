// passing evensts as props is common pattern
// to allow child componets to comunicate with parent components

import React from "react";

function WelcomeUser(props) {
  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    props.clickEvent();
  };
  return (
    <>
      <button onClick={props.clickEvent}>click</button>
      <br />
      <br />
      <button onMouseEnter={props.hoverEvent}>Hover Me</button>
      <br />
      <br />
      <button onClick={handleGreeting}>Greetings</button>
    </>
  );
}

const handleWelcomeUser = (user) => {
  alert(`Hey, ${user}.`);
};

const handleHover = () => {
  alert(`Why did you hover over me?`);
};

export default function EventsAsProps() {
  return (
    <>
      <WelcomeUser
        clickEvent={() => handleWelcomeUser("Dada")}
        hoverEvent={handleHover}
      />
    </>
  );
}
