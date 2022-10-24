import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar bg-black mb-3">
      <div className="container mx-auto px-4">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Local microblogging client</Link>
        <div>
          <form className="form-inline navbar-end">
            <Link
              to="/posts/new"
              className="btn btn-outline btn-primary"
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
