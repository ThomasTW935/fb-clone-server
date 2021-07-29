import express from 'express'
const router = express.Router()

import { fetchAllPost, fetchPostByUser } from '../../controllers/Post/FetchPost'
import {
  createPost,
  editPost,
  deletePost,
} from '../../controllers/Post/PostActions'

router.post('/', createPost)
router.put('/:id', editPost)
router.delete('/:id', deletePost)
router.get('/', fetchAllPost)
router.get('/:userId', fetchPostByUser)

module.exports = router
