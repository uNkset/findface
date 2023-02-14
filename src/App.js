import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import ParticlesBg from 'particles-bg';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Input from './components/Input';
import Rank from './components/Rank';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <Input />
        {/*
        <FaceRecognition /> 
        */}
      </div>
    );
  }
}

export default App;
