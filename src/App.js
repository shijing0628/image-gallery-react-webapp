
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router className="app">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/gallery' exact component={Gallery}></Route>
      </Switch>
    </Router>
  );
}

export default App;
