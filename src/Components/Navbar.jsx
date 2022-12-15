import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from '../Providers/ThemeProvider';
import { AuthContext } from "../Providers/AuthContext";

import styles from './Navbar.module.css';

const Navbar = () => {

  const { theme, handleTheme } = useContext(ThemeContext);

  const { isLogged, removeUserData } = useContext(AuthContext);

  const [isVisble, setIsVisible] = useState(false);

  function handleVisible() {
    setIsVisible(!isVisble);
  }
  
  const navigate = useNavigate();

  const logout = () => {
    removeUserData();
    navigate("/login");
  }

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${
          theme === 'navbar-light bg-light'
            ? 'navbar-light bg-light'
            : 'navbar-dark bg-dark'
        }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="team" className="nav-link">
                  Team
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>

              {!isLogged ? (
                  <Link to="/login" className="nav-link">Login</Link>
                ) : (
                  <button
                  className={theme === 'navbar-light bg-light' ? "btn btn-light" : "btn btn-dark"} onClick={logout}>Logout
                  </button>
                )}
              </li>
              <li className={`nav-item`} onClick={handleTheme}>
                <button 
                  onClick={handleVisible}
                  className={`btn btn-light ${styles.btnStyle} ${
                    theme === 'navbar-light bg-light'
                      ? 'bg-dark'
                      : 'bg-light'
                  }`}
                >
                  {isVisble ? '🌞' : '🌛'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
