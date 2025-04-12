import React, { useState } from "react";

export default function ShotCircuit() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState();
  return (
    <>
      <section className="container short-container">
        <h1>Welcome</h1>
        {isLoggedIn && <p>You are logged in!</p>}
        {user ? `Hello ${user}` : "You are logged in bitch!"}

        <div className="grid-three-cols">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Toggle Login State
          </button>
          <button onClick={() => setUser("Nipun Rawat")}>Set user</button>
          <button onClick={() => setUser("")}>Clear User</button>
        </div>
      </section>
    </>
  );
}
