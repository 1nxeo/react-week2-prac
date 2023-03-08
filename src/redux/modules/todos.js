const initialState = [
  {
    id: 1,
    title: "booyah!",
    desc: "nicholas",
    isDone: false,
  },
  {
    id: 2,
    title: "boobooyah!",
    desc: "nicco",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.length + 1,
        title: action.payload.titleRef.current.value,
        desc: action.payload.descRef.current.value,
        isDone: false,
      };
      alert("등록완료!");
      return [...state, newTodo];

    case DONE_TODO:
      const newList = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, isDone: !action.payload.isDone }
          : item
      );
      return newList;

    case DEL_TODO:
      const itemDeletedList = state.filter(
        (item) => item.id !== action.payload.id
      );
      return itemDeletedList;

    case UPDATE_TODO:
      const itemId = action.payload.id;
      const itemIndex = state.findIndex((item) => item.id === itemId);
      const updateItem = {
        id: itemId,
        title: action.updates.title,
        desc: action.updates.desc,
        isDone: action.payload.isDone,
      };
      const updateList = [...state];
      updateList.splice(itemIndex, 1, updateItem);
      return updateList;

    default:
      return state;
  }
};

const ADD_TODO = "app/todos/add";
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const DONE_TODO = "app/todos/done";
export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};

const DEL_TODO = "app/todos/delete";
export const delTodo = (payload) => {
  return { type: DEL_TODO, payload };
};

const UPDATE_TODO = "app/todos/update";
export const updateTodo = (payload, updates) => {
  return { type: UPDATE_TODO, payload, updates };
};

export default todos;
