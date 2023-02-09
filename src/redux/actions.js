/* eslint-disable no-unused-vars */
import {CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS} from './types';

export const createPost = (post) => {
  return {type: CREATE_POST, payload: post}
}

export const fetchPosts = () => {
  return {type: REQUEST_POSTS}
/*   return async (dispatch) => {
    dispatch({type: SHOW_LOADER, payload: true})
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data = await response.json();
    dispatch({type: HIDE_LOADER, payload: false})
    dispatch({type: FETCH_POSTS, payload: data})
  } */
}

export const showAlert = (text) => {
  return async (dispatch) => {
    dispatch({type:SHOW_ALERT, payload: text});
    setTimeout(()=>{
      dispatch(hideAlert());
    }, 3000)
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  }
}