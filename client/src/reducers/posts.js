import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
// is a function that accepts a state and action
// our state is going to be posts, so renaming state to posts above
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.paylo// this is coming from the action dispatch.
 // represents our posts
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
// you can export this for where it will be used
