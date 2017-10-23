import React from 'react';

const EpisodeListitem = ({episode}) => {

    // Get access to object properties
    const episodeTitle = episode.title;
    const episodeDescription = episode.synopsis;
    const episodeDate = episode.publish_on;

    // Our markup for the episode list item
    return (
        <li className="list-group-item list">
          <div className="media-left">
            <img className="media-object" src='http://via.placeholder.com/125x125' />
          </div>
          <div className="media-body">
            <div className="media-heading">{episodeTitle}</div>
            <div className="media-description">Episode info would be held here...{episodeDescription}</div>
            <div className="media-producer"><p>Published on: {episodeDate}</p></div>
          </div>
      </li>
    )

}

export default EpisodeListitem;