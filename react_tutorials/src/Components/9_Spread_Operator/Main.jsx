import React from "react";

export default function Main() {
  // use Case 1: Copying Arryas
  // const numbers = [1, 2, 3];
  // // const copiedNumbers = numbers; // this method will perform changes in original data aswell
  // const copiedNumbers = [...numbers];
  // copiedNumbers[2] = 90;
  // console.log(copiedNumbers);
  // console.log(numbers);

  // ---------------------------
  // use Case 2: Concatenating arrays
  // const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // const combinedArray = [...arr1, arr2];
  // console.log(combinedArray);

  // ---------------------------
  // use case3: Adding Elements to an Array.
  // const arr = [1, 2, 3];
  // const newArr = [...arr, 11, 22, 33];
  // console.log(newArr);
  // ---------------------------
  // use case4: Spreading Object Properties
  const person = { name: "john", age: 30 };
  const updatePerson = { ...person, age: person.age + 1 };
  console.log(updatePerson);
  return (
    <>
      <div>hi</div>
    </>
  );
}
