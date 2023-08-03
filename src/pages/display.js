import React from "react";
import { useSelector } from "react-redux";

const DisplayComponent = () => {
  const inputText = useSelector((state) => state.input.value);
  return (
    <div>
      <h1>Text: {inputText}</h1>
    </div>
  );
};

export default DisplayComponent;
