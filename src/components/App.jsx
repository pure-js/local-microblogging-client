import React, { Component } from 'react';

import Story from './Story.jsx';
import CreateStory from './CreateStory.jsx';
import posts from '../mock-posts';

import bootstrap from 'bootstrap/scss/bootstrap.scss';
import styles from '../styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: posts,
    };

    this.addStory = this.addStory.bind(this);
  }

  addStory(value) {
    this.setState(prevState => ({
      stories: [...prevState.stories, value],
    }));
  }

  render() {
    return (
      <div className="container">
        <CreateStory addStory={this.addStory} />
        <div className="card-columns js-news-list">
          {this.state.stories.map(story =>
            <Story key={story.heading} heading={story.heading} body={story.body} image={story.image} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
