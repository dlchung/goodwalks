import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class WeatherView extends Component {
  componentDidMount() {
    this.props.fetchWeather('raleigh');
  }

  renderWeather(data) {
    console.log(data);
    const cityName = data.city.name;

    return (
      <h1 key={cityName}>{cityName}</h1>
    );
  }

  render() {
    return (
      <div>
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);
