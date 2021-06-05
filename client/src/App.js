import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import NoMatch from "./pages/NoMatch";
import Saved from './pages/Saved'
import Search from './pages/Search'

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/noMatch" component={NoMatch} />
      </Wrapper>
    </div>
  </Router>
  );
}

export default App;
