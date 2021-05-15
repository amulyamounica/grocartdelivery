import logo from './logo.svg';
import Header from './header.js'
import Home from './home'
import Login from './login'
import Catelogue from './Catelogue'
import About from './About'
import Contact from './Contact'
import Faqs from './Faqs'
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
      <h1 className="App-h1"><img src="/logo.png" height="75px"></img></h1>
      <Header/>
      <Router> 
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Catelogue" component={Catelogue}/>
          <Route path="/Faqs" component={Faqs}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="*" component={Home} />
        </Switch>
    </Router>
    </div> 
  );
  

}

export default App;
