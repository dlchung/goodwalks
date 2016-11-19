import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: JSON.parse(localStorage.getItem('localCity')),
      textHelp: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ location: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem('localCity', JSON.stringify(this.state.location));
    this.setState({ textHelp : "Your location has been saved." });
  }

  render() {
    return (
      <div className="form-wrap">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="location-input">Your Location:</label>
          <div className="input-group">
            <input
              placeholder="U.S. City e.g. Raleigh"
              className="form-control"
              id="location-input"
              value={this.state.location}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Save</button>
            </span>
          </div>
          <div className="text-help">{this.state.textHelp}</div>
        </form>
      </div>
    );
  }
}
