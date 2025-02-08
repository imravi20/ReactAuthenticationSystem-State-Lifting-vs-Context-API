import React, { useContext, createContext, useState } from "react";
import AppBar from "./AppBar";
import Home from "./Home";
import Login from "./Login";

export const AuthContext = createContext(undefined);

const AuthSystem = () => {
  const [useContextApi, setUseContextApi] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  function login(usernamee) {
    setUsername(usernamee);
    setLoggedIn(true);
  }
  function logout() {
    setUsername("");
    setLoggedIn(false);
  }

  const contextobj = useContextApi
    ? { username, loggedIn, login, logout }
    : undefined;

  return (
    <AuthContext.Provider value={contextobj}>
      <div>
        <AppBar
          propLoggedIn={loggedIn}
          propUsername={username}
          propLoggedOut={logout}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <input
          id="useContextApi"
          type="checkbox"
          checked={useContextApi}
          onChange={(e) => {
            setUseContextApi(e.target.checked);
          }}
        ></input>
        <label htmlFor="useContextApi">
          Use Context Api: {useContextApi ? "On" : "Off"}
        </label>
      </div>

      <div>{loggedIn ? <Home /> : <Login propLoginFunction={login} />}</div>
    </AuthContext.Provider>
  );
};

export default AuthSystem;
