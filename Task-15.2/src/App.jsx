import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PostCard from './components/PostCard'
import Sidebar from './components/Sidebar'
import Button from './components/Button'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h2>Welcome to CommunityHub</h2>
        <PostCard />
        <PostCard />
        <Sidebar />
        <Button />
      </main>
      <Footer />
    </div>
  )
}

export default App