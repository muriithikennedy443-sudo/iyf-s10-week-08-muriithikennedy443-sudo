import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PostCard from './components/PostCard'
import Sidebar from './components/Sidebar'
import Button from './components/Button'

const posts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React...", author: "John Doe", date: "Jan 15, 2026" },
  { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner code...", author: "Jane Smith", date: "Jan 10, 2026" },
  { id: 3, title: "Third Post", excerpt: "Exciting content here...", author: "Bob Lee", date: "Jan 5, 2026" },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h2>Welcome to CommunityHub</h2>
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))}
        <Sidebar />
        <Button text="Submit" variant="primary" />
        <Button text="Cancel" variant="secondary" />
        <Button text="Delete" variant="danger" />
        <Button />
      </main>
      <Footer />
    </div>
  )
}

export default App