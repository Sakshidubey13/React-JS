//import React from 'react'
import allUser from "../data/user.js";


const User =() =>{
    return <div>
        <h1>All USers</h1>
       {
    
        allUser.map((user)=><div>
            {/*<hr/>*/}
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr/>
        </div>)
       }
       {/*{allUser.length}*/}
    </div>;
}

export default User;
