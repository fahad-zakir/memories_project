import axios from 'axios';

const url = 'http://localhost:4000/posts';

export const fetchPosts = () => axios.get(url)
// all back-end actions such as above will be used in Redux