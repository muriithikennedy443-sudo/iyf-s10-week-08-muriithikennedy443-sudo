import PostCard from './PostCard';

const posts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React...", author: "John Doe", date: "Jan 15, 2026" },
  { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner code...", author: "Jane Smith", date: "Jan 10, 2026" },
  { id: 3, title: "Third Post", excerpt: "Exciting content here...", author: "Bob Lee", date: "Jan 5, 2026" },
];

function PostList() {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default PostList;