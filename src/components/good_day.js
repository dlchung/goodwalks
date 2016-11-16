import React from 'react';

export default (props) => {
  const temp = props.currentTemp;
  const lowTemp = 50;
  const highTemp = 85;
  const great = "great-weather";
  const hot = "hot-weather";
  const cold = "cold-weather";
  var walkStatus = "";
  var mood = "";

  const statusGreat = "It's a great day to walk!";
  const statusCold = "Brr! It's too cold to walk!";
  const statusHot = "Wow! It's too hot to walk!";

  if(temp > lowTemp && temp < highTemp) {
    walkStatus = statusGreat;
    mood = great;
  }
  else if (temp > lowTemp){
    walkStatus = statusHot;
    mood = hot;
  }
  else {
    walkStatus = statusCold;
    mood = cold;
  }

  document.body.classList.add(`${mood}`);

  return (
      <p className="walk-status">{walkStatus}</p>
  );
}
