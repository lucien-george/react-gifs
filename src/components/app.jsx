import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifsList from './gifs_list.jsx';
import giphy from 'giphy-api';

const GIPHY_API_KEY = '78pPY1EnLUwiWBpLPoqsd8GzlYzuhTPw';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'RVW5PilbP2tLG',
      gifs: []
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
    .search({
      q: query,
      rating: 'g'
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      id: id
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.id}/>
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={this.state.gifs} selectGifFunction={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
