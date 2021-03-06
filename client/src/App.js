import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Nav from "./components/Nav/Nav";
import Saved from "./pages/Saved";
import "./App.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        {/* <Header/> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
