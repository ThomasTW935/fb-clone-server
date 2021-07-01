import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true },
  firebase_uid: { type: String, required: true },
})

const User = mongoose.model('user', UserSchema)

module.exports = User
