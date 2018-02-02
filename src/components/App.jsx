import React, { Component } from 'react';

import bootstrap from 'bootstrap/scss/bootstrap.scss';

import Story from './Story.jsx';
import CreateStory from './CreateStory.jsx';
import posts from '../mock-posts';

import styles from '../styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CreateStory />
        <div className="card-columns js-news-list">
          {posts.map((story) =>
            <Story key={story.heading} heading={story.heading} body={story.body} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
