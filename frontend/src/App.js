import React, { Component } from 'react';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
          <h1>Hello World</h1>
          </div>
        </div>
        <Home />
      </div>
    )
  }
}

export default App;
