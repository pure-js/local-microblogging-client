import React, { Component } from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">Local microblogging client</a>
          <div>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >New post
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
