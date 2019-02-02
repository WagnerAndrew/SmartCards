import React, { Component } from 'react'
import Navbar from './components/Card/Navbar'
import Cards from './pages/Cards'
import Results from './pages/Results'
import NewCard from './pages/NewCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar/>
        <Cards/>
        
      </div>
    );
  }
}

export default App;
