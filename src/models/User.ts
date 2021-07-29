import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  firebase_uid: { type: String, required: true },
  active: { type: Boolean, default: false },
})

module.exports = model('User', UserSchema)
