import React, { Component } from 'react';
const $ = window.$; // esta línea permite que Jquery funcione


// Contact component render contact form
class ForgotPass extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactEmail: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
  }

  // Change state of input field so text is updated while typing
  _handleChangeEmail(e) {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  
  _handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactEmail: '',
  });

  $.ajax({
      //url: process.env.NODE_ENV !== "production" ? 'https://apptd.herokuapp.com/auth/forgotpass' : "https://apptd.herokuapp.com/auth/forgotpass",
      type: 'POST',
      data: {
        'email': this.state.contactEmail
      },
      cache: false,
      success: function(data) {
        // Success..
        // TODO: Navigate next page or homepage
        this.setState({
          contactEmail: 'success'
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
        <h2>Recupera tu contraseña</h2>
          <form className="form" onSubmit={this._handleSubmit} id="formContact">
            <label>Correo Electrónico:</label>
            <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChangeEmail} required/>
            <p><input type="submit" value="Enviar correo" className="btn--cta" id="btn-submit" /></p>
          </form>
        </div>
      </div>
    )
  }
}

export default ForgotPass;