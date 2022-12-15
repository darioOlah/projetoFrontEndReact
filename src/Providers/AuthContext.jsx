import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const [isLogged, setIsLogged] = useState(false);

  function fillUserData({ token }) {
    localStorage.setItem("@authDentista", JSON.stringify({ token }));

    setUserData({ ...userData, token });
    setIsLogged(true);
  }

  function removeUserData() {
    localStorage.removeItem("@authDentista");
    setIsLogged(false);
  }

  useEffect(() => {
    const authentication = localStorage.getItem("@authDentista");

    let user;

    if (authentication) {
      user = JSON.parse(authentication);

      fillUserData({ token: user.token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ userData, fillUserData, isLogged, removeUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
