import { useState, useContext, useEffect} from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { AuthContext } from "../Providers/AuthContext";

import api from "../Services/api";

import Card from "../Components/Card";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  const { theme } = useContext(ThemeContext);

  const { userData } = useContext(AuthContext);

  const { token } = userData;

  useEffect(() => {
    getDentistas();
  }, []);

  async function getDentistas() {
    try {
      const collect = await api.get("/dentista", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDentistas(collect.data);
    } catch (event) {
      console.log("Erro ao buscar dentistas");
    }
  }

  return (
    <div className={theme === "navbar-light bg-light" ? `light` : `dark`}>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map((dentista) => {
          return <Card dentista={dentista} key={dentista.matricula}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
