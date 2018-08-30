import React, { Component } from 'react'
import PostDetail from './PostDetail'
import { Link } from 'react-router-dom'

class UserPosts extends Component  {

  constructor(props) {
    super(props)

    this.state = {
      userPosts: []
    }
  }

  componentWillMount() {
    const userId = this.props.match.params.id
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then( res => res.json() )
        .then( userPosts => this.setState({ userPosts: userPosts }) )
          .catch(error => console.error('Error:', error))
  }

  render() {
    const { userPosts } = this.state

    return (
      <div>
        <h2 className="posts">User Posts</h2>
        <Link to="/" >Back to all posts</Link>
        <div className="post-detail">
          <PostDetail posts={userPosts} />
        </div>
      </div>
    )
  }

}

export default UserPosts
