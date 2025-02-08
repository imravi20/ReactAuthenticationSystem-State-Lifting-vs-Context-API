import React, { useContext } from "react";
import { AuthContext } from "./AuthSystem";

const AppBar = ({ propLoggedIn, propUsername, propLoggedOut }) => {
  const contextObject = useContext(AuthContext);

  const isLoggedIn = contextObject?.loggedIn ?? propLoggedIn;
  const anyUserName = contextObject?.username ?? propUsername;
  const logout = contextObject?.logout ?? propLoggedOut;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Auth System Demo</div>
      <div>
        {isLoggedIn ? (
          <span>
            Welcome,{anyUserName}!<button onClick={logout}>Logout</button>
          </span>
        ) : (
          <span>Not Logged In</span>
        )}
      </div>
    </div>
  );
};

export default AppBar;
