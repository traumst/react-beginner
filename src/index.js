import React, { Component } from 'react'
import { render } from 'react-dom'
import { Redirect } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import Navigation from './component/Navigation'
import Login from './component/Login'

let users = {
  "alex" : "pass",
  "olga" : "ssap"
};

let posts = [
  {
    id: 1,
    thumbnail: "img/two-eighths.png",
    title: "Post 1",
    categories: [
      {id: 1, name: "cat1"},
      {id: 2 , name: "cat2"}
    ],
    content: "Content content content, content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content"
  },
  {
    id: 2,
    thumbnail: "img/two-eighths.png",
    title: "Post 2",
    categories: [
      {id: 1, name: "cat1"},
      {id: 3 , name: "cat3"}
    ],
    content: "This time its something else this time its something else this time its something else this time its something else this time its something else this time its something else this time its something else."
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  
  signIn(userEntered) {
    if(userEntered.username in users && users[userEntered.username] === userEntered.password) {
      this.setState({
        user: {
          username: userEntered.username,
          password: userEntered.password
        }
      })
    }
  }
  
  signOut() {
    this.setState({
      user: null
    });
  }
  
  render() {
    return (<main>
        <Navigation user={this.state.user} 
                    onSignOut={this.signOut.bind(this)} />
        <Switch>
          {/* HOME */}
          <Route exact path='/' render={() => (
            <Home posts={posts} 
                  user={this.state.user} />
          )}/>
  
          {/* LOGIN */}
          <Route path='/Login' render={() => (
            <Login user={this.state.user}
                   onSignIn={this.signIn.bind(this)} />
          )}/>
          
        </Switch>
      </main>)
  }
}

render (
  <BrowserRouter>
      <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
