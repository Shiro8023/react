import React, { Component } from 'react';
import getRouter from './router/Router';
// import logo from './logo.svg';
import './App.css';
const element = (
  <h1 className="APP-header">
    hello
  </h1>
    );

class App extends Component {
  render() {
    return (
    
      // <div className="App">
      //   <header className="App-header">
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <h1 className="App-title">Welcome to React</h1>
      //     <h1> react 首页</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      element,
      getRouter()
    );
  }
}

export default App;
