import express from 'express';
const router = express.Router();

import {
  fetchAllPost,
  fetchPostByUser,
} from '../../controllers/Post/FetchPost';
import {
  createPost,
  editPost,
  deletePost,
  reactPost,
} from '../../controllers/Post/PostActions';

router.post('/', createPost);
router.put('/:id', editPost);
router.put('/:postId/reactions', reactPost);
router.delete('/:id', deletePost);
router.get('/', fetchAllPost);
router.get('/:userId', fetchPostByUser);

module.exports = router;
