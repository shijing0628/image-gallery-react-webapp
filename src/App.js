import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp'
import Banner from './components/Banner/Banner';




function App() {
  return (
    <Router className="app">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/gallery' component={Gallery}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/sign-up' component={SignUp}></Route>
      </Switch>

    </Router>
  );
}

export default App;
