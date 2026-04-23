import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add_todo: (state) => {
      state.todo.push("Workout at 5pm");
    },
    remove_todo: (state) => {},
    update_todo: (state) => {},
  },
});

export default todoSlice.reducer;
export const { add_todo, remove_todo, update_todo } = todoSlice.actions;
