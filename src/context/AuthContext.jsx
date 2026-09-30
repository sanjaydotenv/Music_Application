import React, { createContext, useEffect, useState } from "react";

export const authContextData = createContext();

const AuthContext = ({ children }) => {
  const [loginFalse, setLoginmFalse] = useState(false);
  const [loginTrue, setLoginTrue] = useState(false);

  useEffect(() => {
    if (!loginTrue) return;

    const timer = setTimeout(() => {
      setLoginTrue(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [loginTrue]);

  return (
    <authContextData.Provider
      value={{
        loginFalse,
        setLoginmFalse,
        loginTrue,
        setLoginTrue,
      }}
    >
      {children}
    </authContextData.Provider>
  );
};

export default AuthContext;
