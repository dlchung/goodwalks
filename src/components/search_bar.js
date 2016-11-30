import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest-material-ui';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(event) {
    this.props.onUserInput(event.label, event.location);
  }

  render() {
    return (
        <Geosuggest
          placeholder="Enter your location"
          types={['(regions)']}
          onSuggestSelect={this.onSuggestSelect}
        />
    );
  }
}
