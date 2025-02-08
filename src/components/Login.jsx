import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthSystem";

const Login = ({ propLoginFunction }) => {
  const [usernamee, setUsernamee] = useState("");
  const contextObj = useContext(AuthContext);

  const handleInput = () => {
    if (contextObj?.username) {
      contextObj.login(usernamee);
    } else {
      propLoginFunction(usernamee);
    }
    setUsernamee("");
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={usernamee}
          onChange={(e) => {
            setUsernamee(e.target.value);
          }}
        ></input>
        <button onClick={handleInput}>Login</button>
      </div>
    </div>
  );
};

export default Login;
