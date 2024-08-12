import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div className="home">Home</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App