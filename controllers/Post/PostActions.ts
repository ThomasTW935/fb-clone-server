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
      user: req.userId,
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
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export {}
