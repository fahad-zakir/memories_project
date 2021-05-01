export default (posts = [], action) => {
    // is a function that accepts a state and action
    // our state is going to be posts, so renaming state to posts above
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

// you can export this to where it will be used