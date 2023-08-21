import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">SignUp</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Navbar;
