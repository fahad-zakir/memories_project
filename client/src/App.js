import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { getPosts } from './actions/posts';
// this is an action that we can use in dispatch
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
// allows you to dispatch an action
//comments below

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // these are hooks
    // dispatch is where you dispatch actions
    // find a place to dispatch and use it inside useEffect
    // as soon as it gets dispatched from action you go to the reducer(posts)

    useEffect(() => {
        //inside dispatch is where you dispatch an action (for example like fecth api)
        dispatch(getPosts());
    }, [dispatch]);


    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;

//hooks have made redux easier to use with easier syntax