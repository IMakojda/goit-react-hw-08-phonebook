import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <h1>
      404 Page not found <br />:(  Please go to Contact {' '}
      <Link to="/contacts">Contacts</Link>
    </h1>
  );
};