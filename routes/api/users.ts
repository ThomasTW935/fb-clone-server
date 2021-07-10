import express from 'express'
const router = express.Router()

//User Model
const User = require('../../models/User')

// *@route GET api/users
// *@desc Get all users
// ?@acces Public

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(404).json({ error: err })
  }
})

// *@route GET api/users/:firebaseuid
// *@desc Get user with :firebaseuid
// ?@acces Public

router.get('/:firebase_uid', async (req, res) => {
  try {
    const user = await User.findOne({ firebase_uid: req.params.firebase_uid })
    res.json(user)
  } catch (err) {
    res.status(404).json({ error: err })
  }
})

// *@route GET api/users
// *@desc Get all users
// ?@acces Public

router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      firebase_uid: req.body.firebase_uid,
    })
    const user = await newUser.save()
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err })
  }
})

module.exports = router