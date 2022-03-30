import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1 data-testid="title">Page not found</h1>
      <Link to="/" data-testid="link">
        Go to main page
      </Link>
    </>
  );
}

export default NotFoundPage;
