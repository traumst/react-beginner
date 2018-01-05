import React, {Component} from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const username = target.username;
    const password = target.password;
    
    this.setState({
      user: {
        username: username.value,
        password: password.value
      }
    })
  }
  
  handleSubmit(event) {
    // event.preventDefault();
    this.props.onSignIn(this.state.user);
  }
  
  render() {
    return (this.state && this.state.user ? 
      <p>Currently logged in as {this.state.user.username}</p> :
      <form onSubmit={this.handleSubmit}>
        <h3>Sign in</h3>
        <input type="text" name="username" placeholder="enter you username" />
        <input type="password" name="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>)
  }
}

export default Login