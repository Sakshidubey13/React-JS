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
    <div className="container d-flex justify-content-center">
     <div className="col-9">
       <div className="d-flex justify-content-around py-5 rounded shadow m-3">
        <input placeholder="Workout, Read Book etc.." className="w-50" type="text"/>
         <button className="btn btn-primary w-25">Add Todo</button>
      </div>

      <div style={{height:"600px"}} className="d-flex flex-column p-3 m-3 mt-5 rounded shadow">
        <div className="p-4 m-2 rounded shadow d-flex justify-content-between border border-success">
          
            <span className="fs-5">Workout at 5pm</span>
            <span>
              <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger">Remove</button>
            </span>
          
        </div>

      </div>
     </div>
    </div>
  )
}
