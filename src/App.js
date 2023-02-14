import React, { Component } from 'react';
import './App.css';
import 'tachyons';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Input />
        {/*
        <FaceRecognition /> 
        */}
      </div>
    );
  }
}

export default App;
