import React, { Component } from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Profile from './pages/profile';
import Login from './pages/login';
import ActiveUsers from './pages/activeUsers';
import Create from './pages/createProfile';
import NotFound from './pages/notFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllData from './pages/00allProfileData';
import InputData from './pages/00inputProfileData';
import ProfileData from './pages/00profileData';
import UploadIamage from './pages/00uploadImage'
import Bootstrap from "react-bootstrap";
import "./App.css";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/activeusers" component={ActiveUsers}/>
          <Route exact path="/data" component={AllData}/>
          <Route exact path="/input" component={InputData}/>
          <Route exact path="/image" component={UploadIamage}/>
          <Route exact path="/:userName" component={ProfileData}/>
          <Route component = {NotFound}/>
          </Switch>
          <Footer />
        </div>
    </Router>
   
    );
  }
}

export default App;
