import React, { Component } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui';
import { moodColor } from './components/mood_color';

export default class App extends Component {
  render() {
    moodColor(JSON.parse(localStorage.getItem('mood')));
    return (
      <MuiThemeProvider>
        <div>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
          </div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
