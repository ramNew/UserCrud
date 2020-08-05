import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import UserList from "./components/users/UserList";
import UserInfo from "./components/users/UserInfo";
import UserAdd from "./components/users/UserAdd";
import UserEdit from "./components/users/UserEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/users/new" component={UserAdd} />
      <Route exact path="/users/:_id" component={UserInfo} />
      <Route exact path="/users/:_id/edit" component={UserEdit} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default App;
