import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
const API_KEY = "ALOK";
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, props);
  return {
    type: CREATE_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}