import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import Layout from "../components/Layout";
import Working from "../components/Working";
import Done from "../components/Done";
import GlobalStyle from "../GlobalStyle";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Home() {
  // const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  // useEffect(() => {
  //   console.log("todos :", todos);
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <InputForm />
        <Working>
          {todos.map((item) =>
            item.isDone ? null : <Card key={item.id} todo={item} />
          )}
        </Working>
        <Done>
          {todos.map((item) =>
            item.isDone ? <Card key={item.id} todo={item} /> : null
          )}
        </Done>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
