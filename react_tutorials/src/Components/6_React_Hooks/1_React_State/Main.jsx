import React, { useState } from "react";

export default function Main() {
  // const [curent state value, updating function] = useState(initial value)
  const [count, setCount] = useState(0);
  console.log("Parent component rendered");
  const handleInc = () => {
    setCount(() => count + 1);
  };
  const handleDec = () => {
    setCount(() => count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        {/* <button onClick={handleButtonClick}>Increment</button> */}
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
      </div>
      <ChildComponent />
    </>
  );
}

function ChildComponent() {
  console.log("Child Component rendered");
  return <div>Child Component</div>;
}
