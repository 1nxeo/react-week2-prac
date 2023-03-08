import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delTodo, doneTodo, updateTodo } from "../redux/modules/todos";
import Button from "./Button";

function Card({ todo }) {
  const [edit, setEdit] = useState(false);
  // const titleRef = useRef(`${todo.title}`);
  // const descRef = useRef(`${todo.desc}`);

  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const updates = { title, desc };
  const dispatch = useDispatch();
  return (
    <>
      {edit ? (
        <CardWrapper>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div>
            <Button
              onClick={(e) => {
                dispatch(updateTodo(todo, updates));
                setEdit(!edit);
              }}
            >
              수정완료
            </Button>
            <Button onClick={(e) => setEdit(!edit)}>취소</Button>
          </div>
        </CardWrapper>
      ) : (
        <CardWrapper>
          <h2>{todo.title}</h2>
          <p>{todo.desc}</p>
          <div>
            <Button onClick={(e) => setEdit(!edit)}>수정</Button>
            <Button
              onClick={(e) => {
                dispatch(doneTodo(todo));
              }}
            >
              {todo.isDone ? "취소" : "완료"}
            </Button>
            <Button
              onClick={(e) => {
                dispatch(delTodo(todo));
              }}
            >
              삭제
            </Button>
          </div>
        </CardWrapper>
      )}
    </>
  );
}

const CardWrapper = styled.div`
  width: 220px;
  height: 150px;
  border: 2px solid orange;
  border-radius: 25px;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Card;
