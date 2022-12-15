import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";

import LoginForm from "../Components/LoginForm";

const Contact = () => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme === "navbar-light bg-light" ? `light` : `dark`}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Contact;
