import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    
    updateTodo: () => {},
  },
});
