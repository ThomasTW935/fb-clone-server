export const formattedPostData = (post: any) => {
  return {
    id: post.id,
    content: post.content,
    privacy: post.privacy,
    user: {
      id: post.user.id,
      first_name: post.user.first_name,
      last_name: post.user.last_name,
    },
    createdAt: post.createdAt,
  }
}
