import React, { useEffect, useState } from "react";
import "./Todo.css";

export default function Time() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const interval = setInterval(() => {
  //   const now = new Date();
  //   const date = now.toLocaleDateString();
  //   const time = now.toLocaleTimeString();
  //   setDateTime(`${date} - ${time}`);
  // }, 1000);

  return (
    <>
      <div className="dateTime">{dateTime}</div>
    </>
  );
}
