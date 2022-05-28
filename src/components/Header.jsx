import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { showForm } = props;
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">Local microblogging client</a>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="button"
              onClick={showForm}
            >
              New post
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default Header;
