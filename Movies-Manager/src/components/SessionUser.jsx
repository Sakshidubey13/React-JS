import React, { useState } from "react";

function SessionUser() {
  const [name, setName] = useState(
    sessionStorage.getItem("username") || ""
  );

  const saveName = () => {
    sessionStorage.setItem("username", name);
    alert("Name saved in Session Storage");
  };

  return (
    <div>
      <h2>Current User</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={saveName}>Save</button>

      <p>User: {name}</p>
    </div>
  );
}

export default SessionUser;