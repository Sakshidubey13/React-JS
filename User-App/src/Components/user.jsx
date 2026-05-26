//import React from 'react'
import allUser from "../data/user.js";


const User =() =>{
    return <div>
        <h1>All USers</h1>
       {
        allUser.map(User)=><div>

        </div>
       }
    </div>;
}

export default User;
