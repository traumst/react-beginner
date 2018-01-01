import React, {Component} from "react";
import PostListComponent from './Posts'

class HomeComponent extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return <PostListComponent posts={this.props.posts} />
  }
}

export default HomeComponent