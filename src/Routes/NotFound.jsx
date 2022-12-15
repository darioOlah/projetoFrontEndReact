import { useContext } from 'react';
import { ThemeContext } from '../Providers/ThemeProvider';

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'navbar-light bg-light' ? `light` : `dark`}>
      <div className="container">
        <img
          className="notFound"
          src="/images/404.svg"
          alt="Not Found 404"
        />
      </div>
    </div>
  );
};

export default NotFound;
