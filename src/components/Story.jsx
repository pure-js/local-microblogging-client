import React, { Component } from 'react';

class StoriesFeed extends Component {
  render() {
    function deletePost() {}

    return (
      <section className="card js-news-list__item">
        <img className="card-img-top" src={this.props.image} alt="Card cap" />
        <div className="card-body">
          <h3 className="card-title">
            <a className="h3__link" href="#link">{this.props.heading}</a>
          </h3>
          <p className="card-text">{this.props.body}</p>
          <button
            className="btn btn-default remove-post"
            title="Remove post"
            type="button"
            onClick={deletePost}
          >
            <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
              <title>trashcan</title>
              <path
                d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
                fill="#000"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    );
  }
}

export default StoriesFeed;
