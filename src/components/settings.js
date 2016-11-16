import React, { Component } from 'react';

import SearchBar from './search_bar';

export default class Settings extends Component {
  render() {
    return(
      <div className="settings-wrap">
        <h1>Settings</h1>
        <SearchBar />
      </div>
    );
  }
}
