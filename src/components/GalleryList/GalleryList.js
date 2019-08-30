import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    // the goatList array will be looped through, using GalleryItem component to render the correct content to DOM
    render () {
        return (
            <>
            {this.props.goatList.map((item) =>
            <GalleryItem getGoats={this.props.getGoats} item={item} key={item.id}/>                  
                      )}
            </>
        );
    }
}

export default GalleryList;