// Dynamic Values
import React from "react";

export default function DynamicValues_2() {
  const name = "Queen of tears";
  const rating = 8.2;
  const summary = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias voluptates est natus nobis? Ipsam sequi ipsum corporis sed natus, optio repellat ullam odio molestiae sapiente totam dicta doloribus dolores?`;

  const retirngenre = () => {
    const genre = "Romcom";
    return genre;
  };
  return (
    <>
      {/* 1. Using Variables :- 
    can embed any js  variable in JSX by enclosing curly braces.*/}
      <div>
        <img src="" alt="" />
        <h2>Name: {name}</h2>
        <h2>Rating: {rating}</h2>
        <h2>Summary: {summary}</h2>
        <h2>Genre: {retirngenre()}</h2>
      </div>
    </>
  );
}
