import React, { Component } from 'react';
import { moodColor } from './mood_color';

export default class GoodDay extends Component {
  renderMood() {
    const temp = this.props.currentTemp;
    const lowTemp = 55;
    const highTemp = 85;

    var walkText = "";
    const statusGreat = "It's a great day to walk!";
    const statusCold = "Brr! It's too cold to walk!";
    const statusHot = "Wow! It's too hot to walk!";

    if(temp > lowTemp && temp < highTemp) {
      walkText = statusGreat;
      moodColor("great");
    }
    else if (temp > lowTemp){
      walkText = statusHot;
      moodColor("hot");
    }
    else {
      walkText = statusCold;
      moodColor("cold");
    }

    return walkText;
  }

  render() {
    return (
        <p className="walk-status">{this.renderMood()}</p>
    );
  }
}
