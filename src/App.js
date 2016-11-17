import React, { Component } from 'react';
import { Link } from 'react-router';
import { moodColor } from './components/mood_color';

export default class App extends Component {
  render() {
    moodColor(JSON.parse(localStorage.getItem('mood')));
    return (
      <div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/settings">Settings</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
