// import express from 'express';
// import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'


// const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// //patch is for updating existing data
// //needs the id to know which post is being updated
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

// export default router;  

import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;