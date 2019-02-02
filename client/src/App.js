import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css';
import CardButtons from './components/CardButtons';
import Results from './components/Results';
import NewCard from './components/NewCard';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar/>

        <Card/>
        <CardButtons/>
        

      </div>
    );
  }
}

export default App;
