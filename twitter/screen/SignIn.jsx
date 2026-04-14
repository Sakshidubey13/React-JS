import React from "react";
import axios from "axios";
import { users_api } from "../utils/api.js";

export default function SignIn() {
  const [user, setUser] = useState({});

  const handleSignIn = async () => {
    const res = await axios.get(users_api);
    const loginUser = res.data.find((e) => e.email == user.email && e.password == user.password )
    localStorage.setItem("current-user",JSON.stringify(loginUSer));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleSignIn}>SignIn</button>
    </div>
  );
}
