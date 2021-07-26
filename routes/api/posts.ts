import express from 'express'
const router = express.Router()

import { fetchAllPost, fetchPostById } from '../../controllers/Post/FetchPost'
import {
  createPost,
  editPost,
  deletePost,
} from '../../controllers/Post/PostActions'

router.post('/', createPost)
router.put('/:id', editPost)
router.delete('/:id', deletePost)
router.get('/', fetchAllPost)
router.get('/:postId', fetchPostById)

module.exports = router
