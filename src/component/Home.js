import React from "react";
import PostListComponent from './Posts'

const Home = (props) => (
  <div>
    {props.posts ? <PostListComponent posts={props.posts} /> : ''}
  </div>
);

export default Home