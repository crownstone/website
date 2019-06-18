import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      nickName: '',
      inviteCode: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Beste {this.state.firstName} {this.state.lastName} </h1>
        <div class="indicates-required"><span class="asterisk">*</span> verplicht</div>
        <div class="item-group">
        <label>
          Email
          <span class="asterisk"> *</span>
        </label>
        <input type="email" name="email" class="required email" onChange={this.handleChange} />
        </div>
        <div class="item-group">
        <label>
          Voornaam
          <span class="asterisk"> *</span>
        </label>
        <input type="text" name="firstName" class="required" onChange={this.handleChange} />
        </div>
        <div class="item-group">
        <label>
          Achternaam
          <span class="asterisk"> *</span>
        </label>
        <input type="text" name="lastName" class="required" onChange={this.handleChange} />
        </div>
        <div class="item-group">
        <label>
          Schuilnaam
        </label>
        <input type="text" name="nickName" onChange={this.handleChange} />
        </div>
        <div class="item-group">
        <label>
          Uitnodigingscode
          <span class="asterisk"> *</span>
        </label>
        <input type="text" name="inviteCode" onChange={this.handleChange} />
        </div>
        <input type="submit" class="button" value="Aanmelden" />
      </form>
    );
  }
}

export default NameForm;
