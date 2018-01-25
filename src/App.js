import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    counter() {
        let $counter = 0;
        return $counter;
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React counter app</h1>
        </header>

        <div>
            Current count is: {this.counter()}
        </div>

      </div>
    );
  }
}

export default App;
