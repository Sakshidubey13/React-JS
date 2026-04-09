import { useState } from "react";
import axios from "axios";


export default function SignUp() {

    const [user,setUser] = useState({})


    //api calling and network request
    //.post => to send data 
    const handleSignup = async() => {
      axios.post("")
    };


  return (
    <div>

      <div>
        <input onChange={(e)=>setUser({...user,name:e.target.value})} type="text" placeholder="Full Name" />
      </div>

      <div>      
        <input onChange={(e)=>setUser({...user,email:e.target.value})} type="text" placeholder="Email" />
      </div>

      <div>     
        <input onChange={(e)=>setUser({...user,phone:e.target.value})} type="text" placeholder="Phone" />
      </div>

      <div>       
        <input onChange={(e)=>setUser({...user,password:e.target.value})} type="text" placeholder="Password" />
      </div>

      <div>
        <button onClick={handleSignup}>Sign Up</button>
      </div>

    </div>
  );
}
