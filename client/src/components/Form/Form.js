import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// Forms from materialize
// userDispatch dispatches the action from the actions
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  // inside the useState are the object properties
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };
// dispatched is being done through this handleSubmit
// createPost is the method coming from action
// postData is the state, the post we are creating
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField 
          name="creator" 
          variant="outlined" 
          label="Creator" 
          fullWidth 
          // value is stored in the state postData.creator
          // each postData object key is going to be a specific text field
          value={postData.creator} 
          // onChange has the setPostData for setting the state for those properties
          // with (e) below this is a callBack function with event as a paramter
          // setPostData is a setter method for the state
          // we are spreading the postData, only creator will be changed
          // use mem.dev to save and train with it
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
        />
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
        />
        <TextField 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth multiline rows={4} 
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
        />
        <TextField name="tags" 
          variant="outlined" 
          label="Tags (coma separated)" 
          fullWidth value={postData.tags} 
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
        />
        <div className={classes.fileInput}>
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
// most of these properties that you are seeing in buttons and text are Materialize properties for buttons, fields, etc.
