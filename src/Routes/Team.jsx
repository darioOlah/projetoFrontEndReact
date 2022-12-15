import { useContext } from 'react';
import TeamProject from '../Components/TeamProject';
import { ThemeContext } from '../Providers/ThemeProvider';

const Team = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'navbar-light bg-light' ? `light` : `dark`}>
        <h1>Team</h1>
        <TeamProject />
    </div>
  );
};

export default Team;
