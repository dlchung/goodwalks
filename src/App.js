import React, { Component } from 'react';
import { Link } from 'react-router';
import { moodColor } from './components/good_day';

export default class App extends Component {
  render() {
    moodColor("great");
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
