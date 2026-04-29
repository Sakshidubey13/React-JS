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

    updateTodo: (state, actions) => {
      state.value[actions.payload.index] = {
        text: actions.payload.text,
        status: false,
      };
    },

    markDone: (state, actions) => {
      const index = actions.payload;
      if (state.value[index]) {
        state.value[index].status = true;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo, markDone } = todoSlice.actions;
