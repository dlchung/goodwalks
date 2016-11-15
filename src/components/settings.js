import React, { Component } from 'react';

import SearchBar from './search_bar';

export default class Settings extends Component {
  render() {
    return(
      <div>
        <h1>Settings</h1>
        <SearchBar />
      </div>
    );
  }
}
