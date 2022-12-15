import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthContext';
import { ThemeContext } from '../Providers/ThemeProvider';
import { ToastContainer, toast, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import api from '../Services/api';

import styles from './ScheduleForm.module.css';

const ScheduleForm = () => {
  const { userData } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const { token } = userData;

  const [pacientes, setPacientes] = useState([]);
  const [dentistas, setDentistas] = useState([]);

  const [pacienteSend, setPacienteSend] = useState('');
  const [dentistaSend, setDentistaSend] = useState('');
  const [dataHoraConsulta, setDataHoraConsulta] = useState('');

  useEffect(() => {
    getDentistas();
    getPacientes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    postConsulta();
  };

  async function getPacientes() {
    try {
      const collect = await api.get('/paciente', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPacientes(collect.data.body);
    } catch (event) {
      console.log('Erro ao buscar pacientes');
    }
  }

  async function getDentistas() {
    try {
      const collect = await api.get('/dentista', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDentistas(collect.data);
    } catch (event) {
      console.log('Erro ao buscar dentistas');
    }
  }

  async function postConsulta() {
    const data = {
      paciente: {
        matricula: pacienteSend,
      },
      dentista: {
        matricula: dentistaSend,
      },
      dataHoraAgendamento: dataHoraConsulta,
    };

    console.log(pacienteSend);
    console.log(dentistaSend);
    console.log(data);

    try {
      await api.post('/consulta', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast('Consulta agendada com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        type: 'success',
        autoClose: 1000,
        theme: 'colored',
        transition: Slide,
      });
    } catch (event) {
      toast('Data e horário indisponíveis, escolha novamente.', {
        position: toast.POSITION.TOP_CENTER,
        type: 'error',
        autoClose: 3000,
        theme: 'colored',
        transition: Slide,
      });
    }
  }

  return (
    <>
      <div
        className={
          theme === 'navbar-light bg-light'
            ? `text-center container light`
            : `text-center container bg-dark`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista:
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                value={dentistaSend}
                onChange={(event) => setDentistaSend(event.target.value)}
              >
                <option value="">Selecionar</option>
                {dentistas.map((dentista) => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {`${dentista.nome} ${dentista.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente:
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                value={pacienteSend}
                onChange={(event) => setPacienteSend(event.target.value)}
              >
                <option value="">Selecionar</option>
                {pacientes.map((paciente) => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {`${paciente.nome} ${paciente.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Data e hora da consulta:
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                value={dataHoraConsulta}
                onChange={(event) => setDataHoraConsulta(event.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              disabled={dataHoraConsulta === '' ? true : false}
              className={
                theme === 'navbar-light bg-light'
                  ? `btn btn-dark ${styles.button}`
                  : `btn btn-primary ${styles.button}`
              }
              type="submit"
            >
              Agendar a Consulta
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ScheduleForm;
