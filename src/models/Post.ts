import { Schema, model } from 'mongoose';

const PostSchema = new Schema(
  {
    privacy: { type: String, enum: ['Only me', 'Public'], default: 'Public' },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    content: { type: String, trim: true },
    image: { type: String },
    reactions: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        react: {
          type: String,
          enum: ['like', 'heart'],
          default: 'like',
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model('Post', PostSchema);
