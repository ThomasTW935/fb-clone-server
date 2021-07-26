const Post = require('../../models/Post')

const createPost = async (req: any, res: any) => {
  const { content, privacy } = req.body
  if (!content) {
    return res.status(422).json({ error: 'Write some content' })
  }

  try {
    const createPost = new Post({
      content,
      privacy,
      user: req.body.userId,
    })

    const savePost = await createPost.save()

    const post = await Post.findById(savePost.id).populate('user')
    const postData = {
      id: post.id,
      content: post.content,
      privacy: post.privacy,
      user: {
        id: post.user._id,
        name: post.user.name,
      },
    }

    res
      .status(200)
      .json({ message: 'Post created successfully', post: postData })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Something went wrong when creating post' })
  }
}
const editPost = async (req: any, res: any) => {
  const { content, privacy } = req.body
  const { id } = req.params
  if (!content) {
    return res.status(422).json({ error: 'Write some content' })
  }

  try {
    const editPost = {
      content,
      privacy,
    }

    await Post.updateOne({ _id: id }, editPost)
    const post = await Post.findById(id).populate('user')
    const postData = {
      _id: post.id,
      content: post.content,
      privacy: post.privacy,
      user: {
        _id: post.user._id,
        name: post.user.name,
      },
      createdAt: post.createdAt,
    }

    res
      .status(200)
      .json({ message: 'Post edited successfully', post: postData })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Something went wrong when editing post' })
  }
}
const deletePost = async (req: any, res: any) => {
  const { id } = req.params
  try {
    await Post.findByIdAndDelete(id)
    res.json({ success: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Something went wrong when editing post' })
  }
}

export { createPost, editPost, deletePost }
