import * as api from '../api';
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
    dispatch({ type: 'FETCH_ALL', payload: data });
    //what's inside dispatch is an action
    } catch (error) {
        console.log(error.message);
    }
}
