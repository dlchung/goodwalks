import React, { Component } from 'react';
import WeatherNow from './weather_now';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class WeatherView extends Component {
  render() {
    return (
        <WeatherNow />
    );
  }
}
