import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">Local microblogging client</Link>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <Link
              to="posts/new"
              className="btn btn-outline-primary my-2 my-sm-0"
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
