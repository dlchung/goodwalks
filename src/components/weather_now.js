import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import GoodDay from './good_day';

class WeatherNow extends Component {
  componentDidMount() {
    const localCity = JSON.parse(localStorage.getItem('localCity')) ? JSON.parse(localStorage.getItem('localCity')) : "Raleigh";

    // Get new weather data when the page is loaded
    this.props.fetchWeather(localCity);
  }

  renderWeather(data) {
    console.log(data);
    const cityName = data.name;

    // Convert temperatures from Kelvin
    const currentTempF = (9 / 5 * (data.main.temp - 273.15) + 32).toFixed();
    //const currentTempC = (data.main.temp - 273.15).toFixed();

    return (
      <div key={cityName} className="weatherWrap">
        <p className="currentCity">{cityName}</p>
        <p className="currentTemp">{currentTempF}&deg;F</p>
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
