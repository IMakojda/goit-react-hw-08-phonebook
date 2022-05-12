import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <h1>
      404 Page not found <br />:(  Please Login {' '}
      <Link to="/contacts">Login</Link>
    </h1>
  );
};