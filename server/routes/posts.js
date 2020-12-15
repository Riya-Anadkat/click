import express from 'express';
import { getPosts, createPost, updatePost} from '../controllers/posts.js'


const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
//patch is for updating existing data
//we need the id before editing

export default router;  

