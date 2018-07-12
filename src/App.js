import React, { Component } from 'react';
import Button from "./Button";
import flag from './flag.png'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      uname: 'Devinder',
      pwd: 'Xebia@123'
    };
  }
  handleUnameChange(event){
    console.log(event.target);
    
    this.setState({
      uname: event.target.value
    })
  }
  handlePwdChange(event){
    console.log(event.target);
    
    this.setState({
      pwd: event.target.value
    })
  }
  validate() {
    alert('Login');
  }    
  render() {
    return (
      <div className="App">
        < div className="box">
          <header className="App-header">
            <img src={flag} className="App-logo" alt="logo" />
            <h1 className="App-title">LOGIN</h1>
          </header>

          <center> <input className="field1" type="text" id="me" value={this.state.uname} placeholder="Username" onChange={(event) => this.handleUnameChange(event)}/>
          </center>
          <br />
          <center> <input type="password"  className="field1" id="pwd" value={this.state.pwd} onChange={(event) => this.handlePwdChange(event)} placeholder="Password" />
          </center>
          <br />
          <input type="checkbox" value="Keep me logged in" />Keep me logged in
           <br />
          <br />
          <Button buttonName = 'Click Me!'/>
          <Button buttonName = 'Click Me!'/>
          <Button buttonName = 'Submit'/>
          <center><a className="link" href="https://www.google.com">Forgot password?</a></center>

        </div>    </div> 
    );
  }
}



export default App;
