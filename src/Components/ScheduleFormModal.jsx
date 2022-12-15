import { useContext } from 'react';
import { ThemeContext } from '../Providers/ThemeProvider';
import ScheduleForm from './ScheduleForm';

const ScheduleFormModal = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className={theme === "navbar-light bg-light" ? `modal-content bg-light` : `modal-content bg-dark`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Selecione o dentista, o paciente, a data e a hora</h1>
            <button type="button" className={theme === "light" ? `btn-close btn-dark` : `btn-close btn-light`} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div >

  );
};

export default ScheduleFormModal;
