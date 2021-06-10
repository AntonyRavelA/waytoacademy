import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./headerlogo";
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import CreateClass from './components/CreateClass/CreateClass'
import MyProfile from './components/MyProfile/MyProfile'
import Classes from './components/Classes/Classes'
import Display from './components/Classes/Display'
class App extends React.Component{
    render() {
        return(
          <Router>
          <div className="container-fluid">
    
            <Header />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/create-class">
                <CreateClass />
              </Route>
              <Route path="/my-profile">
                <MyProfile />
              </Route>
              <Route path="/product/:producttype?">
                <Classes />
              </Route>
              <Route path="/product/:producttype?/:id?">
                <Display />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              
            </Switch>
          </div>
        </Router>
        )
        
    }

}
export default App;