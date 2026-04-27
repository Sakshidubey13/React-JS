/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo_slice.js";

export default function Todo() {
  const todoList = useSelector((state) => state.todo.value); // first todo  (todo: todoReducer,=> here is store.js) and second todo decrale for ( value: []=> here is todo_slice.js)
  const dispatch = useDispatch();

  //  eslint-disable-next-line no-unused-vars
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <input className="w-50" type="text"/>
         <button className="btn btn-primary w-25">Add Todo</button>
      </div>
      <div>

      </div>
    
    </div>
  )
}
