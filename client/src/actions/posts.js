import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

// means we import everything as api
// so to fetchPosts all you do is this api.fetchPosts, since we will be
// making a lot of api calls

// Action Creators
// what we need to create, they are functions that return action
// payload is the data that stores a lot of our posts
// redux thunk allows us to have another arrow function to make it asynchronous
// in it we use dispatch to get access to it
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
// getting response which always has the data object and storing it in data
// we are returning this from the back-end
// basically data represents the post
    dispatch({ type: FETCH_ALL, payload: data });
//what's inside dispatch is an action
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
