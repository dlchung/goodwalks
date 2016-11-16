import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { location: JSON.parse(localStorage.getItem('localCity')) };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    // context for router redirect
    router: PropTypes.object
  }

  onInputChange(event) {
    this.setState({ location: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem('localCity', JSON.stringify(this.state.location));

    // Redirect user to home after submitting the location
    this.context.router.push('/');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="locationInput">Your Location:</label>
        <div className="input-group">
          <input
            placeholder="U.S. City e.g. Raleigh"
            className="form-control"
            id="locationInput"
            value={this.state.location}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </div>
      </form>
    );
  }
}
