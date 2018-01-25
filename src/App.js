import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={ counter: 1}
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React counter app</h1>
        </header>

        <div>
            Current count is: {this.state.counter}
        </div>

      </div>
    );
  }
}

export default App;
