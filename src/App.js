import React, { Component } from 'react';
import GIFpage from './components/GIFpage';
import ImageUpload from './components/ImageUpload';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1 className="title">Grant Reighard's Trending GIPHY Page</h1>
        <GIFpage />
        {/* <ImageUpload /> */}
      </div>
    );
  }
}

export default App;
