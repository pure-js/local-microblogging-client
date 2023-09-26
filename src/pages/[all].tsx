import { useLocation } from 'react-router-dom';

function NoMatch() {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center mt-3">404</h1>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
}

export default NoMatch;
