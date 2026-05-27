//import React from 'react'
import allUser from "../data/user.js";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState(allUser);
  return (
    <div>
      <h1>All Users</h1>
      {users.map((user, i) => (
        <div key={i}>
          <hr />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button
            onClick={() => {
            //  const temp = [...users];
            //  temp.splice(i, 1);
            //  setUsers(temp);
     
            //  setUsers([users.filter,{i}])
            }}>
            Remove
          </button>
        </div>
      ))}
      {/*{allUser.length} find length any json data */}
      <button
        onClick={() => {
        //  const temp = [...users];
        //  temp.push({ name: "Sakshi", email: "sakshiid13@gmail.com" });
        //  setUsers(temp);
         setUsers([...users,{name:"Sakshi",email:"sakshiid13@gmail.com"}])
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
        //  const temp = [...users];
        //  temp.pop();
        //  setUsers(temp);
        setUsers(users.slice(0,-1))
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
