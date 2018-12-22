import React, { Component } from 'react';
const $ = window.$; // esta línea permite que Jquery funcione


// Contact component render contact form
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactEmail: '',
      contactPass: '',
      contactName: '',
      contactLastName: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleChangePass = this._handleChangePass.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeLastName = this._handleChangeLastName.bind(this);
  }

  // Change state of input field so text is updated while typing
  _handleChange(e) {
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

  _handleChangeName(e) {
    this.setState({
      contactName: e.target.value
    });
  }

  _handleChangeLastName(e) {
    this.setState({
      contactLastName: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactEmail: '',
      contactPass: '',
      contactName: '',
      contactLastName: ''
    });

    $.ajax({
      url: process.env.NODE_ENV !== "production" ? 'https://apptd.herokuapp.com/auth/signup' : "https://apptd.com/auth/signup",
      type: 'POST',
      data: {
        'email': this.state.contactEmail,
        'password': this.state.contactPass,
        'name': this.state.contactName,
        'lastname': this.state.contactLastName
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
          <label>Nombre:</label>
          <input id="formName" type="text" name="formName" value={this.state.contactName} onChange={this._handleChangeName} required/>
          <label>Apellido:</label>
          <input id="formLastName" type="text" name="formLastName" value={this.state.contactLastName} onChange={this._handleChangeLastName} required/>
          
            
            
            <label>Correo Electrónico:</label>
            <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChange} required/>
            <label>Contraseña:</label>
            <input type="password" id="formPass" name="formPass" value={this.state.contactPass} onChange={this._handleChangePass} required></input>
            <input type="submit" value="Crear Cuenta" className="btn--cta" id="btn-submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;