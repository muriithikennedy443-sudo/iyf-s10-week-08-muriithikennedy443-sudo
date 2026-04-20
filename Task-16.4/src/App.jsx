import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Stats from './components/Stats'
import LikePostList from './components/LikePostList'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 },
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <Layout>
      <h1>Task 16.4: Lifting State Up</h1>
      <Stats totalPosts={posts.length} totalLikes={totalLikes} />
      <LikePostList posts={posts} onLike={handleLike} />
    </Layout>
  )
}

export default App