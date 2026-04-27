import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.value.push(actions.payload);
    },
    removeTodo: (state, actions) => {
      state.value.splice(actions.payload, 1);
    },
   
    // eslint-disable-next-line no-unused-vars
    updateTodo: (state,actions) => {},
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
