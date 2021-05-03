import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
// a reducer is a function that accepts the state 
// it accepts the action, if it accepts it
// than you return the state changed by the action
// these are function that accepts a state and action
// our state is going to be posts, so renaming state to posts above
// otherwise posts = state
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
 // this is coming from the action dispatch.
 // represents our posts
 // payload is the data that stores a lot of our posts
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      // since you are sending an array notice how it's an array
      // it will be stored in action.payload
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
