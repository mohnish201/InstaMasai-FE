import React from "react";
import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e)=> {

    const data={email,password}
    e.preventDefault()
    axios
    .post("http://localhost:8000/users/login", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <br />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
