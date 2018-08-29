import React from 'react'
import { Link } from 'react-router-dom'

const postDetail = ({ posts }) => (

  <div>
    {posts.map( post =>
      <div className="post-detail" key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <Link to={`/users/${post.userId}`}><p>Author: {post.userId}</p></Link>
      </div>
    )}
  </div>
)

export default postDetail
