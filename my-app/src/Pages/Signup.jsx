import React from "react";
import { useState } from "react";
import axios from "axios";
const initState = {
  name: "",
  email: "",
  gender: "",
  password: "",
  age: "",
  city: "",
  is_married: "",
};
const Signup = () => {
  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/users/register", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const { name, age, email, gender, city, is_married, password } = data;
  return (
    <div>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} /> <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={gender}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={age}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Marital Status"
          name="is_married"
          value={is_married}
          onChange={handleChange}
        />
        <br />
        <input type={"submit"} value="submit" />
      </form>
    </div>
  );
};

export default Signup;
