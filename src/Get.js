import axios from "axios";
import React, { Component } from "react";
import './Get.css';
import { Link } from "react-router-dom";
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/show')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div >
      <div className="app">

      <table border={1}>
      <thead>
        <tr>
            
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>emailId</th>
          <th>salary</th>
          
          
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.emailId}</td>
            <td>{user.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
            </div>
            <div className="bu">

     <button className="button">
     <Link to="/">Add Employee</Link>
     </button>
     <button className="button">
     <Link to="/Update" >Update</Link>
     </button>
     <button className="button">
     <Link to="/DeleteRecord">Delete</Link>
     </button>
            </div>

   </div>
    );
  }}
  
export default Get;