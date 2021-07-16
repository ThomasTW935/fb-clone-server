const Post = require('../../models/Post')

const fetchAllPost = async (req: any, res: any) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate('user')
    res.status(200).json({ posts: posts })
  } catch {
    res.status(500).json({ error: 'Database Error' })
  }
}
const fetchPostById = async (req: any, res: any) => {
  try {
    const post = await Post.findById(req.params.postId).populate('user')
    res.status(200).json({ post: post })
  } catch {
    res.status(500).json({ error: 'Database Error' })
  }
}

export { fetchAllPost, fetchPostById }
