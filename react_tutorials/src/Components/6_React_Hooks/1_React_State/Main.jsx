import React, { useState } from "react";

export default function Main() {
  // const [curent state value, updating function] = useState(initial value)
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  //   console.log(count);

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={handleButtonClick}>Increment</button> */}
      <button onClick={handleButtonClick}>Increment</button>
    </>
  );
}
