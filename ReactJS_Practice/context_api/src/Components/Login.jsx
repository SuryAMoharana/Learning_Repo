import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

const { setUser } = useContext(UserContext);

const handleSubmit = (e) => {
  e.preventDefault();
  setUser({ userName, password });
};

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={userName} onClick={handleSubmit} />
    </div>
  );
};

export default Login;
