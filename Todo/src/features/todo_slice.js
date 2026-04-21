import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    // removeTodo: (state, action) => {
    //   state.todo = state.todo.filter((_, index) => index !== action.payload);
    // },
    updateTodo: () => {},
  },
});
