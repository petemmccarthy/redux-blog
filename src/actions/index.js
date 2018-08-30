import { FETCH_ALL_POSTS } from './types'

export const fetchAllPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json() )
      .then( posts => dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts
      }) )
        .catch(error => console.error('Fetch posts error:', error))
}
