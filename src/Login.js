import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      emailId: '',
      salary: '',
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleemailIdChange = (event) => {
    this.setState({ emailId: event.target.value });
  };

  handleSalaryChange = (event) => {
    this.setState({ salary: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      salary: this.state.salary,
    };

    axios.post('http://127.0.0.1:8080/add', data);
  };

  render() {
    return (
      <body>
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <label className="sign-label">First Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
        />

        <label className="sign-label">Last Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
        />

        <label className="sign-label">Email</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.emailId}
          onChange={this.handleemailIdChange}
        />

        <label className="sign-label">Salary</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.salary}
          onChange={this.handleSalaryChange}
        />

        <button className="login-button" type="submit">
          Create
        </button>
      </form>
  

       <button className='button'>
       <Link  to="/Update" >Update</Link>
     </button >
     <button className='button'>
       <Link  to="/Get">All Records</Link>
     </button>
     <button className='button'>
       <Link  to="/DeleteRecord">Delete</Link>
     </button>

     
     </body>
    );
  }
}

export default Login;
