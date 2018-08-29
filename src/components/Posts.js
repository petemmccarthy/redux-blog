import React, { Component } from 'react'
import PostDetail from './PostDetail'

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
          .catch(error => console.error('Error:', error))
  }

  render() {
    const { posts } = this.state

    return (
      <div>
        <h2 className="posts">Posts</h2>
        <div className="post-detail">
          <PostDetail posts={posts} />
        </div>
      </div>
    )

  }
}

export default Posts
