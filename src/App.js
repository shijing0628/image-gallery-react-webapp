import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router className="app">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/gallery' component={Gallery}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/auth' component={Login}></Route>
        <Route path='/user' component={SignUp}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
      </Switch>

    </Router>
  );
}

export default App;
