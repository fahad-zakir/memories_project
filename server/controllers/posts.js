import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    // callBack Function
    // await is added to make it asynchronous since this PostMessage.find() takes times
    try {
        const postMessages = await PostMessage.find();
        // find all the posts that we have in the database
        res.status(200).json(postMessages);
        // array of all the messages that we have
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    // with post, you have access to req.body
    // you can't console.log it because you can send it
    // unless you have a front-end to submit it through
    const post = req.body;
    const newPost = new PostMessage(post);
    // you are passing post in PostMessage from the model schema
    try {
    // await is an aynschronous action
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}