import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Sidebar from './components/Layout/Sidebar'
import PostList from './components/Post/PostList'
import CreatePost from './components/Post/CreatePost'

const initialPosts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React and build awesome apps.", author: "John Doe", date: "Jan 15, 2026", likes: 5 },
  { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner, more maintainable JavaScript code.", author: "Jane Smith", date: "Jan 10, 2026", likes: 3 },
  { id: 3, title: "CSS Tips & Tricks", excerpt: "Make your UI beautiful with these CSS techniques.", author: "Bob Lee", date: "Jan 5, 2026", likes: 7 },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState('');

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onLoginClick={() => alert('Login coming soon!')} />
      <div className="main-layout">
        <main className="main-content">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search posts..."
          />
          <CreatePost onAddPost={handleAddPost} />
          <h2>Posts ({filteredPosts.length})</h2>
          <PostList posts={filteredPosts} onLike={handleLike} onDelete={handleDelete} />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App