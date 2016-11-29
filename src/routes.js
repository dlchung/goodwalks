import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './App';
import WeatherView from './components/weather_view';
import Settings from './components/settings';

export default (
    <Route path="/" component={App} >
      <IndexRoute component={WeatherView} />
      <Route path="/settings" component={Settings} />
    </Route>
);
