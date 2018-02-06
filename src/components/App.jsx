import React, { Component } from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';

import Header from './Header';
import Story from './Story';
import CreateStory from './CreateStory';
import posts from '../mock-posts';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: posts,
      form: false,
    };

    this.addStory = this.addStory.bind(this);
    this.deleteStory = this.deleteStory.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  addStory(story) {
    this.setState(prevState => ({
      stories: [...prevState.stories, story],
    }));
  }

  deleteStory(key) {
    let { stories } = this.state;
    stories = stories.filter(obj => obj.heading !== key);
    this.setState({
      stories,
    });
  }

  showForm() {
    this.setState({
      form: true,
    });
  }

  render() {
    let createForm = null;
    if (this.state.form) {
      createForm = <CreateStory addStory={this.addStory} />;
    }
    return (
      <div>
        <Header showForm={this.showForm} />
        <main className="container">
          {createForm}
          <div className="card-columns">
            {this.state.stories.map(story => (
              <Story
                key={story.heading}
                heading={story.heading}
                body={story.body}
                image={story.image}
                timestamp={story.timestamp}
                deleteStory={this.deleteStory}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
