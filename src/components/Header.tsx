import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

function Header() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <nav className="navbar base-300 mb-3">
      <div className="container mx-auto px-4">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Local microblogging client</Link>
        <button type="button" data-toggle-theme="forest,winter" data-act-class="ACTIVECLASS">Switch theme</button>
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
