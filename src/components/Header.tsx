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
        <button
          type="button"
          className="btn btn-circle mr-6"
          data-toggle-theme="forest,winter"
          data-act-class="ACTIVECLASS"
          aria-label="Dark Theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
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
