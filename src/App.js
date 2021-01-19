
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router className="app">
      <Navbar />
    </Router>
  );
}

export default App;
