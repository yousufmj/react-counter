import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={ counter: 1}
    }

    clicked(){
        console.log('this button was clicked')
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React counter app</h1>
        </header>

        <h2>
            Current count is: {this.state.counter}
        </h2>

        <button onClick={ (e) => { this.clicked() } }>Increase</button>
        <button onClick={ (e) => { this.clicked() }}>Decrease</button>

      </div>
    );
  }
}

export default App;
