import React, { useState } from "react";

// 1
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "charlie", age: 35 },
//   { name: "Angelia", age: 45 },
// ];
export default function DerivedState() {
  // 2.
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "charlie", age: 35 },
    { name: "Angelia", age: 45 },
  ]);
  console.log(users);
  const userCount = users.length; // this is derived state as its value is depends on the state variable.
  console.log(userCount);

  return (
    <>
      <ul>
        {users.map((ele, index) => {
          return (
            <li key={index}>
              {ele.name} : {ele.age}
            </li>
          );
        })}
      </ul>
    </>
  );
}
