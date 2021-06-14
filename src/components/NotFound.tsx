import ImageNotFoud from '../assets/404.png';

import { Link } from 'react-router-dom';
import { ROUTE } from './Route';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          margin: 'auto',
        }}
      >
        <img src={ImageNotFoud} alt="Not found image" />
        <Link className="btn btn-success w-25 m-auto" to={ROUTE.HOME}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
