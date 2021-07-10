import express from 'express'
const router = express.Router()

import { fetchAllPost, fetchPostById } from '../../controllers/Post/FetchPost'
import { createPost } from '../../controllers/Post/PostActions'

router.post('/', createPost)
router.get('/', fetchAllPost)
router.get('/:postId', fetchPostById)

module.exports = router
