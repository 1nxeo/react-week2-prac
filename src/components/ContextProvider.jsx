import React from "react";
import { TodoContext } from "../context/TodoContext";

function ContextProvider({ children }) {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
}

export default ContextProvider;
