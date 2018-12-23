import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
const $ = window.$; // esta línea permite que Jquery funcione


// Contact component render contact form
class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactEmail: '',
      contactPass: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePass = this._handleChangePass.bind(this);
   }

  // Change state of input field so text is updated while typing
  _handleChangeEmail(e) {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  _handleChangePass(e) {
    this.setState({
      contactPass: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactEmail: '',
      contactPass: ''
    });

    $.ajax({
      url: process.env.NODE_ENV !== "production" ? 'https://apptd.herokuapp.com/auth/signin' : "https://apptd.herokuapp.com/auth/signin",
      type: 'POST',
      data: {
        'email': this.state.contactEmail,
        'password': this.state.contactPass
      },
      cache: false,
      success: function(data) {
        // Success..
        // TODO: Navigate next page or homepage
        this.setState({
          contactEmail: 'success',
          contactPass: ''
        });
        //$('#formContact').slideUp();
        //$('#formContact').after(this.state.contactPass);
        console.log('success', data);
        localStorage.setItem("id_token", data.token);
      }.bind(this),
      // Fail..
      error: function(xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          contactEmail: 'danger',
          contactPass: ''
        });
        console.log(this.state.contactEmail + this.state.contactPass + 'fail');
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="contact" id="contact">
        <div className="filter">
          <form className="form" onSubmit={this._handleSubmit} id="formContact">  
            <label>Correo Electrónico:</label>
            <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChangeEmail} required/>
            <label>Contraseña:</label>
            <input type="password" id="formPass" name="formPass" value={this.state.contactPass} onChange={this._handleChangePass} required></input>
            <input type="submit" value="Iniciar Sesión" className="btn--cta" id="btn-submit" />
            <NavLink to="/Signin">Crer una cuenta</NavLink>
          </form>
        </div>
      </div>
    )
  }
}

export default Signin;