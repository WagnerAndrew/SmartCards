import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Nav/Navbar'
import AddLibrary from "./pages/AddLibrary";
import AddCard from './pages/AddCard'
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar />
        <Switch>
          <Route exact path="/addLibrary" component={AddLibrary} />
          <Route exact path="/addCard" component={AddCard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
