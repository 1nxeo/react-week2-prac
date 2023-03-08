import React from "react";
import { CardBox } from "./Working";

function Done({ children }) {
  return (
    <div>
      <h1>Done</h1>
      <CardBox>{children}</CardBox>
    </div>
  );
}

export default Done;
