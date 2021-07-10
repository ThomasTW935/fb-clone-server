import express from 'express'
const router = express.Router()

import { fetchAllPost, fetchPostById } from '../../controllers/Post/FetchPost'

//post Model
const Post = require('../../models/Post')

// *@route GET api/posts
// *@desc Get all posts by user
// ?@acces Private

router.get('/', fetchAllPost)
router.get('/:postId', fetchPostById)

module.exports = router
