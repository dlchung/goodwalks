import React, { Component } from 'react';
import SearchBar from './search_bar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const LOW_TEMP = "low-temp";
const HIGH_TEMP = "high-temp";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationLabel: JSON.parse(localStorage.getItem('locationLabel')),
      coordinates: '',
      textHelp: '',
      lowTemp: JSON.parse(localStorage.getItem('lowTemp')),
      highTemp: JSON.parse(localStorage.getItem('highTemp')),
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
  }

  onFormSubmit(event) {
    // Stop default form behavior
    event.preventDefault();

    // Save city name and city coordinates to localStorage
    localStorage.setItem('locationLabel', JSON.stringify(this.state.locationLabel));
    localStorage.setItem('coordinates', JSON.stringify(this.state.coordinates));
    localStorage.setItem('lowTemp', JSON.stringify(this.state.lowTemp));
    localStorage.setItem('highTemp', JSON.stringify(this.state.highTemp));
    this.setState({ textHelp: "Your settings have been saved." });
  }

  handleSearchBarChange(locationLabel, coordinates) {
    this.setState({
      locationLabel,
      coordinates
    });
  }

  onUserInput(event) {
    // Update appropriate state depending on which input is entered
    switch(event.target.id) {
      case LOW_TEMP:
        this.setState({ lowTemp: event.target.value });
        break;
      case HIGH_TEMP:
        this.setState({ highTemp: event.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div className="settings-wrap">
        <h1>Settings</h1>
        <form onSubmit={this.onFormSubmit}>
          <p>Your current location is set to -- {this.state.locationLabel}</p>
          <SearchBar
            onUserInput={this.handleSearchBarChange}
          />

          <div>
            <TextField
              type="number"
              id={LOW_TEMP}
              floatingLabelText="Lowest Temperature"
              hintText="What temperature is too cold?"
              value={this.state.lowTemp}
              onChange={this.onUserInput}
              inputMode="numeric"
              max="100"
              min="0"
            />
          </div>
          <div>
            <TextField
              type="number"
              id={HIGH_TEMP}
              floatingLabelText="Highest Temperature"
              hintText="What temperature is too hot?"
              value={this.state.highTemp}
              onChange={this.onUserInput}
              inputMode="numeric"
              max="100"
              min="0"
            />
          </div>

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
