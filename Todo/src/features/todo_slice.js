import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state,actions) => { state.value.push(actions.payload) },
    removeTodo: (state) => {},
    updateTodo: (state) => {},
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
