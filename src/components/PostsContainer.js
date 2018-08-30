import React, { Component } from 'react'
import PostDetail from './PostDetail'

import { fetchAllPosts } from '../actions'
import { connect } from 'react-redux'

class PostsContainer extends Component {

  componentWillMount() {
    this.props.fetchAllPosts()
  }

  render() {
    const { posts } = this.props.posts

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

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchAllPosts })(PostsContainer)
