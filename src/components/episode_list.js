import React, {Component} from "react";

import EpisodeListItem from './episode_list_item';

class EpisodeList extends Component {
    constructor(props) {
      super(props);

    }

    render() {

        // Map over the returned episodes & return our ListItem Component
        const episode = this.props.episodes.map(( episode => {
            return <EpisodeListItem  key={episode.uid} episode={episode}/>
        }))
        
        // Render our List to the DOM
        return (
            <ul className="col-md-12 list-group">
                { episode }
            </ul>
        );
    }

}


export default EpisodeList;