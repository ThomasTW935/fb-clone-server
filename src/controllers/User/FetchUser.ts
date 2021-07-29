const User = require('../../models/User')

const fetchUserByFirebaseUID = async (req: any, res: any) => {
  try {
    const user = await User.findOne({ firebase_uid: req.params.firebase_uid })
    res.json(user)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export { fetchUserByFirebaseUID }
