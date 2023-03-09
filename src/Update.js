import React, { Component } from 'react';
import './Update.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Update extends Component {
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

  handlefirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handlelastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleemailIdChange = (event) => {
    this.setState({ emailId: event.target.value });
  };

  handlernumberChange = (event) => {
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

    axios.put('http://127.0.0.1:8080/Update', data);
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

        <label className="sign-label">firstName</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.firstName}
          onChange={this.handlefirstNameChange}
        />

        <label className="sign-label">LastName</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.lastName}
          onChange={this.handlelastNameChange}
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
          type="tel"
          value={this.state.salary}
          onChange={this.handlernumberChange}
          />
  
          <button className="update-button" type="submit">
            Update
          </button>
    
         <button className="login-button" type="submit">
         Update Details
       </button>


     <button className='button'>
       <Link  to="/" >Add Employee</Link>
     </button>
     <button className='button'>
       <Link  to="/Get" >All Records</Link>
     </button>
     <button className='button'>
       <Link  to="/DeleteRecord" >Delete</Link>
     </button>    
     
     </form>
      </body>
      );
    }
  }
  
  export default Update;