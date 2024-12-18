import { useLocation } from 'react-router';

function NoMatch() {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-3 text-center">404</h1>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
}

export default NoMatch;
