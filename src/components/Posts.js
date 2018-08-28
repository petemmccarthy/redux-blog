import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => res.json() )
        .then( posts => this.setState({ posts: posts }) )
  }

  render() {
    const { posts } = this.state
    const postDetail = posts.map( post =>
      <div className="post-detail" key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <Link to="/user{post.userId}"> <p>Author: {post.userId}</p></Link>
      </div>
    )

    return (
      <div>
        <h2 className="posts">Posts</h2>
        <div className="post-detail">{postDetail}</div>
      </div>
    )

  }
}

export default Posts
