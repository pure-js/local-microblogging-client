import React, { Component } from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import PropTypes from 'prop-types';
import StoriesFeed from './Story';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">Local microblogging client</a>
          <div>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="button"
                onClick={this.props.showForm}
              >New post
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default Header;
