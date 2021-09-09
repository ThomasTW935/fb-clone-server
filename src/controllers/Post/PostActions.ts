const Post = require('../../models/Post');
import { stringify } from 'querystring';
import { isPrefixUnaryExpression } from 'typescript';
import { formattedPostData } from '../../helper/formattedPostData';

const createPost = async (req: any, res: any) => {
  const { content, privacy } = req.body;
  if (!content) {
    return res.status(422).json({ error: 'Write some content' });
  }

  try {
    const createPost = new Post({
      content,
      privacy,
      user: req.body.userId,
    });

    const savePost = await createPost.save();

    const post = await Post.findById(savePost.id).populate('user');
    const postData = formattedPostData(post);
    res
      .status(200)
      .json({ message: 'Post created successfully', post: postData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong when creating post' });
  }
};
const editPost = async (req: any, res: any) => {
  const { content, privacy } = req.body;
  const { id } = req.params;
  if (!content) {
    return res.status(422).json({ error: 'Write some content' });
  }

  try {
    const editPost = {
      content,
      privacy,
    };

    await Post.updateOne({ _id: id }, editPost);
    const post = await Post.findById(id).populate('user');
    const postData = formattedPostData(post);

    res
      .status(200)
      .json({ message: 'Post edited successfully', post: postData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong when editing post' });
  }
};
const deletePost = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong when editing post' });
  }
};

interface IUser {
  _id: string;
  active: boolean;
  first_name: string;
  last_name: string;
}
interface IReact {
  user: IUser;
  react: string;
}
const reactPost = async (req: any, res: any) => {
  const { postId } = req.params;
  const { userId, react } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'post not found' });
    let postData;
    const postReact = post.reactions.find(
      (react: IReact) => react.user.toString() === userId
    );
    if (postReact === undefined && react === '')
      return res.status(404).json({ error: 'react to a post' });

    if (postReact !== undefined && react === '') {
      await Post.updateOne(
        { _id: postId },
        {
          $pull: { reactions: { user: userId } },
        }
      );
      post.reactions.filter(
        (react: IReact) => react.user.toString() !== userId
      );
      postData = formattedPostData(post);
      console.log(postData);
      res.status(200).json({ message: 'removed react', post: postData });
      return;
    }
    if (postReact !== undefined && react !== '') {
      await Post.updateOne(
        {
          _id: postId,
          'reactions.user': userId,
        },
        {
          $set: { 'reactions.$.react': react },
        }
      );
      postData = formattedPostData(post);
      res.status(200).json({ message: 'update react', post: postData });
      return;
    }
    post.reactions.push({ user: userId, react: react });
    await post.save();
    const newPost = await Post.findById(postId)
      .populate('user')
      .populate('reactions.user');
    postData = formattedPostData(newPost);
    res.status(200).json({ message: 'add react', post: postData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'Something went wrong when reacting to a post' });
  }
};

export { createPost, editPost, deletePost, reactPost };
