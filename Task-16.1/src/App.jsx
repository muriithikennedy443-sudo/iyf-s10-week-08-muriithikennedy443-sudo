import './App.css'
import Layout from './components/Layout'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import UserForm from './components/UserForm'

function App() {
  return (
    <Layout>
      <h1>Task 16.1: useState Hook</h1>
      <h2>Counter</h2>
      <Counter />
      <h2>Toggle</h2>
      <Toggle />
      <h2>User Form</h2>
      <UserForm />
    </Layout>
  )
}

export default App