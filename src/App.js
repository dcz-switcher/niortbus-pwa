import React, { Component } from 'react';

import './App.css';

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

class App extends Component {
  render() {
    return (
        <div className="App">
            <HomeView/>
            <DetailView/>
        </div>
    );
  }
}

export default App;
