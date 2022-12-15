import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Providers/ThemeProvider";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`app ${theme === "navbar-light bg-light" ? "dark" : "light"}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
