import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
