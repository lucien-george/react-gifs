import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifsList extends Component {
  render() {
    return(
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGifFunction={this.props.selectGifFunction}/>)}
      </div>
    );
  }
}

export default GifsList;
