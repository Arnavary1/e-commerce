import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = (username, password) => {
    if (typeof username !== "string") {
      throw new Error("Username must be a string");
    }
    setUser({ username, password });
    navigate("/my-account");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function useAuth() {
  //here?
  const auth = React.useContext(AuthContext);
  return auth;
}
export { AuthProvider, useAuth };
