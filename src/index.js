import React, { Component } from 'react'
import { render } from 'react-dom'
import { PostListComponent } from './component/posts'

let posts = [
  {
    id: 1,
    thumbnail: "img/two-eighths.png",
    title: "PostComponent 1",
    catergories: [
      {id: 1, name: "cat1"},
      {id: 2 , name: "cat2"}
    ],
    content: "Content content content, content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content"
  },
  {
    id: 2,
    thumbnail: "img/two-eighths.png",
    title: "PostComponent 2",
    catergories: [
      {id: 1, name: "cat1"},
      {id: 3 , name: "cat3"}
    ],
    content: "This time its something else this time its something else this time its something else this time its something else this time its something else this time its something else this time its something else."
  }
];

class Home extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (<PostListComponent posts={posts} />);
  }
}

render (
  <Home/>,
  document.getElementById('root')
);