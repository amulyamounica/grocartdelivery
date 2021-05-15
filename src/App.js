import Header from './header.js'
import Home from './home'
import Login from './forms/login'
import Catelogue from './Catelog/Catelogue'
import Catelogue1 from './Catelog/Catelogue1'
import Catelogue2 from './Catelog/Catelogue2'
import Catelogue3 from './Catelog/Catelogue3'
import About from './About'
import Contact from './Contact'
import Faqs from './Faqs'
import Other from './Other'
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
      <Header/>
      <Router> 
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Catelogue" component={Catelogue}/>
          <Route path="/Catelogue1" component={Catelogue1}/>
          <Route path="/Catelogue2" component={Catelogue2}/>
          <Route path="/Catelogue3" component={Catelogue3}/>
          <Route path="/Faqs" component={Faqs}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Other" component={Other}/>
          <Route path="*" component={Home} />
        </Switch>
    </Router>
    </div> 
  );
  

}

export default App;
