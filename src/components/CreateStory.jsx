import React, { Component } from 'react';
import { createPost } from '../services/storiesService';

class CreateStory extends Component {
  render() {
    function onSubmit() {
      const heading = document.getElementsByClassName(conf.heading)[0].value;
      const text = document.getElementsByClassName(conf.text)[0].value;

      createPost(heading, text, conf.newsList);
    }

    function readURL(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          document.getElementById('preview').src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    }

    return (
      <div className="card mb-3">
        <img id="preview" src="#" alt="Card cap" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">What's new?</h3>
          <form>
            <div className="form-group">
              <input
                placeholder="Your heading"
                type="text"
                className="form-control js-new-post__heading"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Write something"
                rows="3"
                className="form-control js-new-post__main-text"
              />
            </div>
            <input
              type="file"
              title="Add image"
              onChange={readURL}
              className="btn btn-default new-post__add-image"
            />
            <button
              title="Add new post"
              type="button"
              onClick={onSubmit}
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
