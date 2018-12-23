import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>The Dresser</h1>
            <NavLink to="/Signin">Iniciar Sesión</NavLink>
            <ul className="header">
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/signup">Crear Cuenta</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/signin" component={Signin}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;