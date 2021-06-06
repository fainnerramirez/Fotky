import { Link } from 'react-router-dom';
import * as ROUTE from './Route';

const NotFound = () => {
  return (
    <>
      <h1>Not Found Page</h1>
      <Link className="btn btn-success" to={ROUTE.HOME}>
        Go Home
      </Link>
    </>
  );
};

export default NotFound;
