const User = require('../../models/User')

const createUser = async (req: any, res: any) => {
  try {
    const newUser = new User({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      firebase_uid: req.body.firebase_uid,
    })
    const user = await newUser.save()
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export { createUser }
