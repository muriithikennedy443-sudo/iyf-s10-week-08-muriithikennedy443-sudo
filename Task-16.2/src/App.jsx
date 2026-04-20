import './App.css'
import Layout from './components/Layout'
import EventExamples from './components/EventExamples'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <Layout>
      <h1>Task 16.2: Handling Events</h1>
      <h2>Event Examples</h2>
      <EventExamples />
      <h2>Contact Form</h2>
      <ContactForm />
    </Layout>
  )
}

export default App