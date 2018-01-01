import React, {Component} from 'react';

function PostCategoriesComponent(props) {
  return (<ul className="post-categories">
    {props.categories ? props.categories.map((category) =>
      <li key={category.id}>{category.name}</li>) : ''}
  </ul>);
}

class PostComponent extends Component {
  render() {
    return this.props.details ? <div className="post">
      <div className="post-preview">
        <div className="post-thumb">
          <input type="checkbox" id={this.props.details.id} />
          <label htmlFor={this.props.details.id}><img src={this.props.details.thumbnail} alt="thumbnail"/></label>
        </div>
        <div className="post-title">
          <h1>{this.props.details.title}</h1>
        </div>
        <PostCategoriesComponent categories={this.props.details.categories}/>
        <div className="post-content">
          <p>{this.props.details.content}</p>
        </div>
      </div>
      <div className="post-details">
        <input type="button" value="Details" />
      </div>
    </div> : '';
  }
}

class PostListComponent extends Component {
  render() {
    return (<div className="post-lists">
      {this.props.posts ? this.props.posts.map((post) =>
        <PostComponent key={post.id} details={post} />) : ''}
    </div>);
  }
}

export default PostListComponent