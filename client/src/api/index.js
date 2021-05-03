import axios from 'axios';

const url = 'http://localhost:5000/posts';
// all back-end actions such as above will be used in Redux
// this is for the api requests
export const fetchPosts = () => axios.get(url);
//newPost is the paramater that is the whole post
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
