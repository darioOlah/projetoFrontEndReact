import { createContext, useState } from "react";

import styles from "../Components/Footer.module.css";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("navbar-light bg-light");
  const [icons, setIcons] = useState(`${styles.icons}`);


  function handleTheme() {
    if (theme === "navbar-light bg-light") {
      setTheme("navbar-dark bg-dark");
      setIcons(`${styles.iconsDark}`)
    } else {
      setTheme("navbar-light bg-light");
      setIcons(`${styles.icons}`)
    }
  }

  return (

    <ThemeContext.Provider value={{ theme, icons, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
