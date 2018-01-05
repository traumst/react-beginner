import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import Navigation from './component/Navigation'
import Login from './component/Login'

let users = {
  "alex" : "pass",
  "olga" : "ssap"
};

class Main extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user: null,
      posts: null
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(res => {
        let posts = res.map((_post) => {
          return {
            id: _post.id,
            thumbnail: _post.thumbnail,
            title: _post.title,
            categories: _post.categories,
            content: _post.content
          }
        });
        this.setState({
          posts: posts
        });
      }, (error) => {
        console.log(error);
        debugger
      })
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
            <Home posts={this.state.posts} 
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
