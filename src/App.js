import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Ui/Header/Header'
import Home  from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import CreateClass from './components/CreateClass/CreateClass'
import MyProfile from './components/MyProfile/MyProfile'

function App() {
  return (
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;