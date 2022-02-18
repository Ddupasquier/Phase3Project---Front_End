import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [form, setForm] = useState("");

  function submitUser(e) {
    e.preventDefault();
    const userInfo = { username: form };
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => setForm(""));
  }

  return (
    <div>
      <form onSubmit={(e) => submitUser(e)}>
        <input
          type="text"
          placeholder="Username"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        ></input>
        <input type="submit" className="togreen bitfont submitbtn"></input>
        <br />
        <button className="submitbtn">
          <Link to="/game" className="togreen bitfont">
            <h1>Enter</h1>
          </Link>
        </button>
      </form>
    </div>
  );
}

export default UserLogin;
