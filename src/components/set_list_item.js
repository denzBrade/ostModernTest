import React from 'react';

const SetListitem = ({home}) => {

    // Get access to object properties
    const setTitle = home.title;
    const setDescription = home.summary;
    const setProducer = home.created_by;

    // Our markup for the set list item
    return (
        <li className="list-group-item list">
          <div className="media-left">
            <img className="media-object" src='http://via.placeholder.com/125x125' />
          </div>
          <div className="media-body">
            <div className="media-heading">{setTitle}</div>
            <div className="media-description">If Summary exists it will appear here...{setDescription}</div>
            <div className="media-producer"><p>Produced by: {setProducer}</p></div>
          </div>
      </li>
    )

}

export default SetListitem;