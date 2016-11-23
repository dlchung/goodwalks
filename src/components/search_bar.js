import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationLabel: JSON.parse(localStorage.getItem('locationLabel')),
      coordinates: '',
      textHelp: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(event) {
    console.log(event);
    this.setState({ locationLabel: event.label });
    this.setState({ coordinates: event.location });
  }

  onFormSubmit(event) {
    // Stop default form behavior
    event.preventDefault();

    // Save city name and city coordinates to localStorage
    localStorage.setItem('locationLabel', JSON.stringify(this.state.locationLabel));
    localStorage.setItem('coordinates', JSON.stringify(this.state.coordinates));
    this.setState({ textHelp: "Your settings have been saved." });
  }

  render() {
    return (
      <div className="form-wrap">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="location-input">Your Location:</label>
          <Geosuggest
            placeholder="Enter your location"
            inputClassName="form-control"

            types={['(regions)']}
            onSuggestSelect={this.onSuggestSelect}
          />
          <div className="text-help">{this.state.textHelp}</div>
          <button type="submit" className="btn btn-secondary">Save</button>
        </form>
      </div>
    );
  }
}
