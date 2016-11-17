import React, { Component } from 'react';

export function moodColor(mood) {
  var currentMood = "";
  const great = "great-weather";
  const hot = "hot-weather";
  const cold = "cold-weather";

  switch(mood) {
    case 'great':
      currentMood = great;
      break;
    case 'hot':
      currentMood = hot;
      break;
    case 'cold':
      currentMood = cold;
      break;
    default:
      currentMood = "";
      break;
  }

  localStorage.setItem('mood', JSON.stringify(mood));
  document.body.classList.add(currentMood);
}

export default class GoodDay extends Component {
  renderMood() {
    const temp = this.props.currentTemp;
    const lowTemp = 55;
    const highTemp = 85;
    // const great = "great-weather";
    // const hot = "hot-weather";
    // const cold = "cold-weather";
    // var mood = "";

    var walkText = "";
    const statusGreat = "It's a great day to walk!";
    const statusCold = "Brr! It's too cold to walk!";
    const statusHot = "Wow! It's too hot to walk!";

    if(temp > lowTemp && temp < highTemp) {
      walkText = statusGreat;
      //mood = great;
      moodColor("great");
    }
    else if (temp > lowTemp){
      walkText = statusHot;
      // mood = hot;
      moodColor("hot");
    }
    else {
      walkText = statusCold;
      // mood = cold;
      moodColor("cold");
    }

    //document.classList.remove(great, hot, cold);

    //localStorage.setItem('mood', JSON.stringify(mood));

    return walkText;
  }

  render() {
    return (
        <p className="walk-status">{this.renderMood()}</p>
    );
  }
}
