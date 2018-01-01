import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomeComponent from './component/Home'
import NavComponent from './component/Navigation'

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

const About = () => <h1>About Page Goes here</h1>;

const Main = () => (
  <main>
    <NavComponent />
    <Switch>
      <Route exact path='/' render={() => (
        <HomeComponent posts={posts} />)}/>
      <Route path='/About' component={About}/>
    </Switch>
  </main>
);

render (
  <BrowserRouter>
      <Main />
  </BrowserRouter>,
  document.getElementById('root')
);