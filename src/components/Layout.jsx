import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <>
      <StHeader>
        <h1>할 일 목록</h1>
        <div></div>
        <h1 style={{ textAlign: "right" }}>인서</h1>
      </StHeader>
      {children}
      <StFooter />
    </>
  );
}

// const LayerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const StHeader = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StFooter = styled.div`
  background-color: greenyellow;
  width: 100%;
  height: 50px;
`;

export default Layout;
