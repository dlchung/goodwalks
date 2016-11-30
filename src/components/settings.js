import React, { Component } from 'react';
import SearchBar from './search_bar';
import FlatButton from 'material-ui/FlatButton';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationLabel: JSON.parse(localStorage.getItem('locationLabel')),
      coordinates: '',
      textHelp: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  onFormSubmit(event) {
    // Stop default form behavior
    event.preventDefault();

    // Save city name and city coordinates to localStorage
    localStorage.setItem('locationLabel', JSON.stringify(this.state.locationLabel));
    localStorage.setItem('coordinates', JSON.stringify(this.state.coordinates));
    this.setState({ textHelp: "Your settings have been saved." });
  }

  handleSearchBarChange(locationLabel, coordinates) {
    this.setState({
      locationLabel,
      coordinates
    });
  }

  render() {
    return(
      <div className="settings-wrap">
        <h1>Settings</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="location-input">Your Location:</label>

          <SearchBar
            onUserInput={this.handleSearchBarChange}
          />
          <div className="text-help">{this.state.textHelp}</div>

          <FlatButton
            label="Save Settings"
            type="submit"
            backgroundColor="#ccc"
            hoverColor="#eee"
          />
        </form>
      </div>
    );
  }
}
