import React from "react";

// // type1
export default function Destructuring(props) {
  const { name, age, standard } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Class: {standard}</h2>
      <br />
    </>
  );
}

// // type2
// export default function Destructuring({ name, age, standard }) {
//   return (
//     <>
//       <h2>Name: {name}</h2>
//       <h2>Age: {age}</h2>
//       <h2>Class: {standard}</h2>
//       <br />
//     </>
//   );
// }
