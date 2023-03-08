import React from "react";
import styled from "styled-components";

function Button({ children, ...rest }) {
  return <StBtn {...rest}>{children}</StBtn>;
}

const StBtn = styled.button`
  width: 50px;
  height: 20px;
  background-color: pink;
  border: 1px transparent;
  border-radius: 5px;
  margin: 2px;
  &:hover {
    border: 1px solid deeppink;
  }
`;

export default Button;
