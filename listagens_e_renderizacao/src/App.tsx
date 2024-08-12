import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyForm from './components/MyForm';
import NumberList from './components/NumberList';
import Contact from './pages/Contact';
import UserList from './components/UserList'; 

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/numbers">Numbers</Link>
        <Link to="/users">Users</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<div className="home">Home</div>} />
        <Route path="/contact" element={<MyForm />} />
        <Route path="/pages" element={<Contact />} />
        <Route path="/numbers" element={<NumberList />} />
        <Route path="/users" element={<UserList />} /> 
      </Routes> 
    </Router>
  );
}

export default App;