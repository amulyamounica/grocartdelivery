import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-icons';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home'
import Login from './forms/login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const routing =  () =>{
  return( 
    <Router> 
    <Switch>
      <App/>
      <Route exact path="/Home" component={Home}/>
      <Route path="/Login" component={Login}/>
    </Switch>
</Router>
  )
}





ReactDOM.render(
  
  <App/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
