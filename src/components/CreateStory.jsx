import React, { Component } from 'react';

class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: '',
      body: '',
    };

    this.handleHeadingChange = this.handleHeadingChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.createStory = this.createStory.bind(this);
  }

  handleHeadingChange(event) {
    this.setState({
      heading: event.target.value,
    });
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value,
    });
  }

  createStory(event) {
    event.preventDefault();
    const story = {
      heading: this.state.heading,
      body: this.state.body,
    };
    alert(this.state.heading);
  }

  render() {
    return (
      <div className="card mb-3">
        <img id="preview" src="" alt="Card cap" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{'What\'s new?'}</h3>
          <form onSubmit={this.createStory}>
            <div className="form-group">
              <input
                placeholder="Your heading"
                type="text"
                className="form-control js-new-post__heading"
                value={this.state.heading}
                onChange={this.handleHeadingChange}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Write something"
                rows="3"
                className="form-control js-new-post__main-text"
                value={this.state.body}
                onChange={this.handleBodyChange}
              />
            </div>
            <input
              type="file"
              title="Add image"
              className="btn btn-default new-post__add-image"
            />
            <button
              title="Add new post"
              type="submit"
              // onSubmit={this.createStory}
              className="btn btn-primary btn-lg new-post__submit"
            >
              <i className="glyphicon glyphicon-ok" />Post it
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateStory;
