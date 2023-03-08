import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

function InputForm() {
  const titleRef = useRef("");
  const descRef = useRef("");
  const dispatch = useDispatch();

  const updates = { titleRef, descRef };
  return (
    <>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(updates));
          titleRef.current.value = "";
          descRef.current.value = "";
        }}
      >
        <div>
          <label>제목 : </label>
          <StInput type="text" ref={titleRef} />
        </div>
        <div>
          <label>내용 : </label>
          <StInput type="text" required ref={descRef} />
        </div>
        <div>
          <input type="submit" required value="등록" />
        </div>
      </FormWrapper>
    </>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

const StInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid;
`;

export default InputForm;
