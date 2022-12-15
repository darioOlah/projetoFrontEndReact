import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthContext';
import { ThemeContext } from '../Providers/ThemeProvider';

import ScheduleFormModal from './ScheduleFormModal';

import styles from './DetailCard.module.css';

import api from '../Services/api';

const DetailCard = () => {
  const { theme } = useContext(ThemeContext);

  const { matricula } = useParams();
  const [dentista, setDentista] = useState({});

  const { userData } = useContext(AuthContext);
  const { token } = userData;

  useEffect(() => {
    getDentista();
  }, []);

  async function getDentista() {
    try {
      const collect = await api.get(`/dentista?matricula=${matricula}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDentista(collect.data);
    } catch (event) {
      console.log('Erro ao buscar dentista');
    }
  }

  return (
    <div className={theme === 'navbar-light bg-light' ? `light` : `dark`}>
      <h1>
        Informações sobre o Doutor {dentista.nome} {dentista.sobrenome}{' '}
      </h1>
      <section
        className={`card col-sm-12 col-lg-6 container ${
          theme === 'navbar-light bg-light' ? `bg-light` : `dark`
        }`}
      >
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
          className={
            theme === 'navbar-light bg-light' ? styles.svg : styles.svgDark
          }
              src="/images/doctor.png"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentista.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className="list-group-item">
                Matrícula: {dentista.matricula}
              </li>
            </ul>
            <div className="text-center">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button} ${
                  theme === 'btn-light' ? `light` : `dark`
                }`}
              >
                Agendar uma Consulta
              </button>
              <p></p>
              <button
                className={`btn btn-light ${styles.button} ${
                  theme === 'btn-light' ? `light` : `dark`
                }`}
              >
                <Link to="/home">Voltar</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </div>
  );
};

export default DetailCard;
