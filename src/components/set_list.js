import React, {Component} from "react";

import SetListItem from './set_list_item';

class SetList extends Component {
    constructor(props) {
      super(props);

    }

    render() {

        const homeSet = this.props.sets.filter(( home => {
            return home.set_type_slug === 'home';
        }));
        
        // Check Home Set has been returned
        console.log(homeSet);

        const home = homeSet.map(( home => {
            return <SetListItem  key={home.uid} home={home}/>
        }))
        
        return (
            <ul className="col-md-12 list-group">
                { home }
            </ul>
        );
    }

}


export default SetList;