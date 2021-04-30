import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// you are calling these functions in the argument
// from the controllers folder where the logic is, 
// so this simplifies and organizes the folder structure
router.get('/', getPosts);
router.post('/', createPost);

export default router;