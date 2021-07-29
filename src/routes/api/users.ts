import express from 'express'

import { createUser } from '../../controllers/User/UserActions'
import { fetchUserByFirebaseUID } from '../../controllers/User/FetchUser'

const router = express.Router()

// *@route GET api/users/:firebaseuid
// *@desc Get user with :firebaseuid
// ?@acces Public

router.get('/:firebase_uid', fetchUserByFirebaseUID)

// *@route POST api/users
// *@desc Create User
// ?@acces Public

router.post('/', createUser)

module.exports = router
