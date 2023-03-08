import React from "react";
import styled from "styled-components";

function Working({ children }) {
  return (
    <div>
      <h1>Working</h1>
      <CardBox>{children}</CardBox>
    </div>
  );
}

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Working;
