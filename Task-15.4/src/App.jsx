import './App.css'
import Layout from './components/Layout'
import Card from './components/Card'
import PostList from './components/PostList'
import UserGreeting from './components/UserGreeting'
import Button from './components/Button'

const currentUser = { name: "muriithikennedy443-sudo" };

function App() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <UserGreeting user={currentUser} />
      <Card title="Welcome">
        <p>This is the card content!</p>
        <button>Click me</button>
      </Card>
      <Card title="Posts">
        <PostList />
      </Card>
      <Button text="Submit" variant="primary" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Delete" variant="danger" />
    </Layout>
  )
}

export default App