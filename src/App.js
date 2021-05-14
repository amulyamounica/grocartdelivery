import logo from './logo.svg';
import Header from './header.js'
import Home from './home'
import Login from './login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Grocery Delivery</h1>
      <Header/>
      <Router> 
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Login" component={Login}/>
        </Switch>
    </Router>
    </div> 
  );
  

}

export default App;
