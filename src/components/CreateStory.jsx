import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './CreateStory.scss';

class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: '',
      body: '',
      image: '',
    };

    this.handleHeadingChange = this.handleHeadingChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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

  handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.setState({
        image: reader.result,
      });
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  createStory(event) {
    const { addStory } = this.props;
    event.preventDefault();
    const { heading, body, image } = this.state;
    const story = {
      heading,
      body,
      image,
      timestamp: Date.now().toString(),
    };
    addStory(story);
  }

  render() {
    const { image, heading, body } = this.state;
    return (
      <div className="card mb-3">
        <img
          id="preview"
          src={image}
          alt="Card cap"
          className="card-img-top create-story__img"
        />
        <div className="card-body">
          <h3 className="card-title">{'What\'s new?'}</h3>
          <form onSubmit={this.createStory}>
            <div className="form-group">
              <input
                placeholder="Your heading"
                type="text"
                className="form-control"
                value={heading}
                onChange={this.handleHeadingChange}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Write something"
                rows="3"
                className="form-control"
                value={body}
                onChange={this.handleBodyChange}
              />
            </div>
            <input
              type="file"
              title="Add image"
              className="btn btn-default new-post__add-image"
              onChange={this.handleImageChange}
            />
            <button
              title="Add new post"
              type="submit"
              className="btn btn-primary btn-lg new-post__submit"
            >
              <i className="glyphicon glyphicon-ok" />
              Post it
            </button>
          </form>
        </div>
      </div>
    );
  }
}

CreateStory.propTypes = {
  addStory: PropTypes.func.isRequired,
};

export default CreateStory;
