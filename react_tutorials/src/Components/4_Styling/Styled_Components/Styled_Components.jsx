import React from "react";
import styled from "styled-components"; // install styled-components

export default function Styled_Components() {
  // type1 -  have to write using proper css
  const Button_ = styled.button`
    border: 2px solid red;
    background-color: pink;
  `;

  //   type2 - regular object CSV
  const Title = styled.h2({
    border: "2px solid red",
    backgroundColor: "green",
  });
  return (
    <>
      <div>
        <Title>Whole lot a lovin!</Title>
        <Button_>Click me bitch</Button_>
      </div>
    </>
  );
}
