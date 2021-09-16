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
  imagePost,
} from '../../controllers/Post/PostActions';

router.post('/', createPost);
router.put('/:id', editPost);
router.put('/:id/photo', imagePost);
router.put('/:postId/reactions', reactPost);
router.delete('/:id', deletePost);
router.get('/', fetchAllPost);
router.get('/:userId', fetchPostByUser);

module.exports = router;
