import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    content: { type: String, trim: true },
    privacy: { type: String, enum: ['Only me', 'Public'], default: 'Public' },
  },
  { timestamps: true }
)

module.exports = model('post', PostSchema)
