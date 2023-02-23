import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch,Route,link } from "react-router-dom"; 
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
