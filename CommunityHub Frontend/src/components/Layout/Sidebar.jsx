function Sidebar() {
  const popularPosts = ["React Hooks Guide", "JavaScript Tips", "CSS Tricks"];
  const tags = ["React", "JavaScript", "CSS", "Node.js", "Web Dev"];

  return (
    <aside className="sidebar">
      <h3>About</h3>
      <p>Welcome to CommunityHub - share and connect!</p>
      <h3>Popular Posts</h3>
      <ul>
        {popularPosts.map((post, i) => <li key={i}>{post}</li>)}
      </ul>
      <h3>Tags</h3>
      <div>
        {tags.map((tag, i) => <span key={i} className="tag">#{tag} </span>)}
      </div>
    </aside>
  );
}
export default Sidebar;