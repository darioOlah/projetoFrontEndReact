import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Providers/ThemeProvider';
import styles from './Card.module.css';

const Card = (props) => {
  const { dentista } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`card ${
          theme === 'navbar-light bg-light' ? 'bg-light' : 'dark'
        }`}
      >
        <img
          className={
            theme === 'navbar-light bg-light' ? styles.svg : styles.svgDark
          }
          src="/images/doctor.png"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <h5 className={`card-title ${styles.title}`}>
            {dentista.nome} {dentista.sobrenome}
          </h5>
          <Link to={`/dentist/${dentista.matricula}`}>
            <button
              className={`btn btn-light ${styles.button} ${
                theme === 'btn-light' ? `light` : `dark`
              }`}
            >
              Selecionar Dentista
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
