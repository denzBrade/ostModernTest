// Our dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Our components
import SearchBar from './components/search_bar';
import EpisodeList from './components/episode_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: []
    };
  }

  // Connect with Skylark API to grab data
  componentDidMount() {
    axios.get('http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000/api/episodes/')
    .then( response => {
      const episodes = response.data.objects;
      this.setState({ episodes });
      console.log(episodes); // ** uncomment to check if data returned **
    })
    .catch(error => {
      // If data can't be reached throw error
      console.log('Error finding data please try again', error);
    });
  }

  // Render Our Components to the DOM
  render() {
    return (
      <div>
        <SearchBar />
        <EpisodeList episodes={this.state.episodes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));