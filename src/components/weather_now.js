import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import GoodDay from './good_day';

class WeatherNow extends Component {
  componentDidMount() {
    //localStorage.clear();

    // Set coordinates to Charlotte, NC if none is set
    const defaultCityCoordinates = { lat: 35.2270869, lng: -80.84312669999997 };
    const coordinates = JSON.parse(localStorage.getItem('coordinates')) ? JSON.parse(localStorage.getItem('coordinates')) : defaultCityCoordinates;

    // Get new weather data when the page is loaded
    this.props.fetchWeather(coordinates);
    console.log(coordinates);

  }

  renderWeather(data) {
    // If no locationLabel exists, then use name provided by weather API
    const cityName = JSON.parse(localStorage.getItem('locationLabel')) ? JSON.parse(localStorage.getItem('locationLabel')) : data.name;

    // Convert temperatures from Kelvin
    const currentTempF = (9 / 5 * (data.main.temp - 273.15) + 32).toFixed();
    //const currentTempC = (data.main.temp - 273.15).toFixed();

    return (
      <div key={cityName} className="weather-wrap">
        <p className="current-city">{cityName}</p>
        <p className="current-temp">{currentTempF}&deg;F</p>
        <GoodDay currentTemp={currentTempF} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNow);
