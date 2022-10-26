import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

function Header() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <nav className="navbar bg-neutral text-neutral-content mb-3">
      <div className="flex-1 mx-auto px-4">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Local microblogging client</Link>
      </div>
      <div className="flex-none">
        <input type="checkbox" className="toggle toggle-sm mr-6" data-toggle-theme="forest,winter" data-act-class="ACTIVECLASS" />
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
