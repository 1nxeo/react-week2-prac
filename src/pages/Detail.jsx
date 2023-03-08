import React from "react";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  return (
    <>
      Detail
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        to Home
      </button>
    </>
  );
}

export default Detail;
