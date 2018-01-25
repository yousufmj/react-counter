import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={ counter: 1}
    }

    increase(){
        console.log('this button was clicked to increase')
    }

    decrease(){
        console.log('this button was clicked to decrease')
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

        <button onClick={ (e) => { this.increase() } }>Increase</button>
        <button onClick={ (e) => { this.decrease() }}>Decrease</button>

      </div>
    );
  }
}

export default App;
