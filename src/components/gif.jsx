import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.selectGifFunction(this.props.id);
  };

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="selected-gif" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
