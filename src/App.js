/* eslint-disable no-unused-vars */
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Account from './Account.js';
import Admin from './Admin.js';
import Login from './Login.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <header>
        <h1>
          <Link to="/">Azure SWA &mdash; Real-Time BPM Counter</Link>
        </h1>
        <Link to="/about" className="about">
          &#63;
        </Link>
      </header>
      <div className="body">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <nav className="nav"></nav>
        <aside className="ads"></aside>
      </div>
      <footer>
        <p>
          Made in 🇳🇴&nbsp; by&nbsp;
          <a href="https://twitter.com/webmaxru/">Maxim Salnikov</a> |&nbsp;
          <a href="https://github.com/webmaxru/swa-demo">GitHub</a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
