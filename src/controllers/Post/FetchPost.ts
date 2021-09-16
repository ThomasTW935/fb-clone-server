const Post = require('../../models/Post');

const fetchAllPost = async (req: any, res: any) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('user')
      .populate('reactions.user');

    res.status(200).json({ posts: posts });
  } catch {
    res.status(500).json({ error: 'Database Error' });
  }
};
const fetchPostByUser = async (req: any, res: any) => {
  try {
    const posts = await Post.find({ user: req.params.userId })
      .sort({ createdAt: -1 })
      .populate('user')
      .populate('reactions.user');
    res.status(200).json({ posts: posts });
  } catch {
    res.status(500).json({ error: 'Database Error' });
  }
};

export { fetchAllPost, fetchPostByUser };
