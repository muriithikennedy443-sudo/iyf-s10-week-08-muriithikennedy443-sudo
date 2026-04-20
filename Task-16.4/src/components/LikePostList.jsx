import LikePostCard from './LikePostCard';

function LikePostList({ posts, onLike }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <LikePostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
}

export default LikePostList;