import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Input from './components/Input';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';

// GENERAL_MODEL: 'aaa03c23b3724a16a56b629203edc62c',
// FOOD_MODEL: 'bd367be194cf45149e75f01d59f77ba7',
// TRAVEL_MODEL: 'eee28c313d69466f836ab83287a54ed9',
// NSFW_MODEL: 'e9576d86d2004ed1a38ba0cf39ecb4b1',
// WEDDINGS_MODEL: 'c386b7a870114f4a87477c0824499348',
// WEDDING_MODEL: 'c386b7a870114f4a87477c0824499348',
// COLOR_MODEL: 'eeed0b6733a644cea07cf4c60f87ebb7',
// CLUSTER_MODEL: 'cccbe437d6e54e2bb911c6aa292fb072',
// FACE_DETECT_MODEL: '53e1df302c079b3db8a0a36033ed2d15',
// LOGO_MODEL: 'c443119bf2ed4da98487520d01a0b1e3',
// DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
// GENERAL_EMBED_MODEL: 'bbb5f41425b8468d9b7a554ff10f8581',
// FACE_EMBED_MODEL: 'e15d0f873e66047e579f90cf82c9882z',
// APPAREL_MODEL: 'e0be3b9d6a454f0493ac3a30784001ff',
// MODERATION_MODEL: 'd16f390eb32cad478c7ae150069bd2c6',
// TEXTURES_AND_PATTERNS: 'fbefb47f9fdb410e8ce14f24f54b47ff',
// LANDSCAPE_QUALITY: 'bec14810deb94c40a05f1f0eb3c91403',
// PORTRAIT_QUALITY: 'de9bd05cfdbf4534af151beb2a5d0953',
// CELEBRITY_MODEL: 'e466caa0619f444ab97497640cefc4dc'

const app = new Clarifai.App({
  apiKey: '9aad495312ea46fa9510a1180d360634',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('f76196b43bbd45c99b4f3cd8e8b40a8a', this.state.input)
      .then((res) =>
        console.log(res.outputs[0].data.regions[0].region_info.bounding_box)
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
