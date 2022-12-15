import { useContext } from 'react';
import { ThemeContext } from '../Providers/ThemeProvider';

import styles from './TeamProject.module.css';

const TeamProject = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme === "navbar-light bg-light" ? `light` : `btn-dark`}`}>
      <div className='row'>
        <h2>Dário Olah</h2>
        <h2>Guilherme Carvalho</h2>
        <h2>Rodrigo Rodrigues</h2>
      </div>
    </div>
  );
};

export default TeamProject;
