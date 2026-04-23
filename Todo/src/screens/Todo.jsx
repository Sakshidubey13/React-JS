import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo_slice.js";

export default function Todo() {
  const todoList = useSelector((state) => state.todo.value); // first todo  (todo: todoReducer,=> here is store.js) and second todo decrale for ( value: []=> here is todo_slice.js)
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  return (
    <div>
      <div>
        <input type="text" placeholder="todo" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={() =>{
          dispatch(addTodo({text, status:false}))
        }}>
            Add</button>
      </div>

      <div>
        {
        todoList.map((todo) => (
           <p>{todo.text}</p>
           <p>{todo.status}</p>
        ))}
      </div>
    </div>
  );
}
