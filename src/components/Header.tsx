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
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Microblogging</Link>
      </div>
      <div className="flex-none justify-between">
        <input type="checkbox" className="toggle toggle-sm mr-6" data-toggle-theme="forest,winter" data-act-class="ACTIVECLASS" />
        <form className="form-inline navbar-end">
          <Link
            to="/posts/new"
            className="btn btn-outline btn-primary"
          >
            New Post
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Header;
