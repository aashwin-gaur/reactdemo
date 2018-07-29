import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../template/header/header'
import { Footer } from '../template/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
