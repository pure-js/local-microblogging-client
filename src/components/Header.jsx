import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">Local microblogging client</Link>
        <div>
          <form className="form-inline">
            <Link
              to="/posts/new"
              className="btn btn-outline-primary"
            >
              New post
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
