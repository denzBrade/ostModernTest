// Our dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Our components
import SearchBar from './components/search_bar';
import SetList from './components/set_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: []
    };
  }

  // Connect with Skylark API to grab data
  componentDidMount() {
    axios.get('http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000/api/sets/')
    .then( response => {
      const sets = response.data.objects;
      this.setState({ sets });
      // console.log(sets); ** uncomment to check if data returned **
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
        <SetList sets={this.state.sets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));