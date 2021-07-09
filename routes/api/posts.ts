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

// *@route GET api/posts/:_uid/:postid
// *@desc Get post of user with :uid
// ?@acces Private

// *@route GET api/posts
// *@desc Get all posts
// ?@acces Public

// router.post('/', async (req, res) => {
//   try {
//     const newpost = new post({
//       name: req.body.name,
//       firebase_uid: req.body.firebase_uid,
//     })
//     const post = await newpost.save()
//     res.json(post)
//   } catch (err) {
//     res.status(400).json({ error: err })
//   }
// })

module.exports = router
