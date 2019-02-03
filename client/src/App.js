import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Card/Navbar'
import Cards from './pages/Cards'
import Results from './pages/Results'
import NewCard from './pages/NewCard'
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route exact path="/add" component={NewCard} />
          <Route exact path="/books/:id" component={Results} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
