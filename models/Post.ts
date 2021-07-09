import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    content: { type: String, trim: true },
  },
  { timestamps: true }
)

module.exports = model('post', PostSchema)
