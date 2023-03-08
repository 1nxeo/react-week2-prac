import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

function Detail() {
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos);
  const param = useParams();
  const foundData = todo.find((item) => {
    return item.id === Number(param.id);
  });

  return (
    <>
      <h3>{foundData.id}</h3>
      <h1>{foundData.title}</h1>
      <p>{foundData.desc}</p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </Button>
    </>
  );
}

export default Detail;
