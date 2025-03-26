import React from "react";

export default function ConditionalRendring_3() {
  let age = 17;

  // type 1
  // if (age >= 18) {
  //   return (
  //     <>
  //       <h1>Thankyou for your visit!</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>beta bade to hojao</h1>
  //     </>
  //   );
  // }
  // ---------------------------
  // type2
  // return (
  //   <>
  //     <h2>{age >= 18 ? "Thankyou for your visit!" : "Beta bade to hojao"}</h2>
  //   </>
  // );
  // ---------------------------
  // type3
  // let canWatch = "Not Available";
  // if (age >= 18) {
  //   canWatch = "Watch Now";
  // }
  // return (
  //   <>
  //     <h2>{canWatch}</h2>
  //   </>
  // );

  // ---------------------------
  // type4
  // const canWatch = () => {
  //   if (age >= 18) return "watch now";
  //   return "not available";
  // };
  // return (
  //   <>
  //     <h2>{canWatch()}</h2>
  //   </>
  // );
  // ---------------------------

  // using && operator
  // --> react does not render "false", "null", "undefined" or "NaN" in DOM,
  // these values if used in JSX will display nothing

  const students = [1, 2];
  return (
    <>
      {/* in && operation, left operand is utililized first but will not move forward if its false */}

      {/* this is a problem that it displays 0 instead of giving "not found" statement */}
      {/* <p>{students.length && "No student found"}</p> */}

      {/* solution down here */}
      {/* 1. */}
      {/* <p>{students.length === 0 && "No student found"}</p> */}
      {/* 2. */}
      {/* <p>{!students.length && "No student found"}</p> */}
      {/* 3. */}
      <p>{Boolean(!students.length) && "No student found"}</p>

      <p>Number of students: {students.length}</p>
    </>
  );
  // ---------------------------
}
