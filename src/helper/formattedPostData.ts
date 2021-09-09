import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export const formattedPostData = (post: any) => {
  return {
    _id: post._id,
    content: post.content,
    privacy: post.privacy,
    user: {
      _id: post.user._id,
      first_name: post.user.first_name,
      last_name: post.user.last_name,
    },
    reactions: post.reactions,
    createdAt: post.createdAt,
  };
};
