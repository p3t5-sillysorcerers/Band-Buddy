import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Profile from './pages/profile';
import Login from './pages/login';
import ActiveUsers from './pages/activeUsers';
import Create from './pages/createProfile';
import NotFound from './pages/notFound';
import AllData from './pages/00allProfileData';
import Footer from './components/Footer';
// import InputData from './pages/00inputProfileData';
import ProfileData from './pages/00profileData';
import UploadImage from './pages/imageUploader'
import AllJams from "./pages/00allJams"
// import Bootstrap from "react-bootstrap";
import "./App.css";
// import ChatMessage from './components/Chat/ChatMessage';
import ChatPage from './pages/ChatPage';
// import Signup from './components/SignUp/Signup';
// import { default as Chatkit } from '@pusher/chatkit-server';
import axios from "axios";
import  IdentityContext  from "./identity-context";
// import Nav from "./Nav"
// import User from "./User"

class App extends Component {

  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false
  }

  componentDidMount() {
    // check for logged in user
    // axios.get("/api/user")
    //   .then(response => {
    //     if (response.data) {
    //       console.log("USER FROM API", response.data)
    //       this.setState({
    //         user: response.data,
    //         userStateInfo: `${response.data.username} is logged in`
    //       })
    //     }
    //   })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  login = event => {
    console.log("LOGGING IN")
    event.preventDefault();
    axios.post("/api/user/login", { "username": this.state.username, "password": this.state.password })
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data,
          loggedIn: true,
          username: "",
          password: "",
          errorMessage: "",
          test: "",
        })
        console.log(this.state.loggedIn)
        if (this.state.loggedIn === true) {
          console.log("IT WORKS!")
          // return  <Redirect to="/profile" />;

            // this.props.Router.push("profile")
         
        }
      })
      .catch(error => {
        console.log("LOGIN ERROR")
        this.setState({
          user: {},
          logginId: false,
          errorMessage: "Error logging in"
        })
      })
  }

  logoutHandler = ()=>{
    if(this.state.redirect === true){
      this.setState({
        redirect:false
      })
      return <Redirect to="/login"></Redirect>
    }
  }

  logout = event => {
    event.preventDefault();
    axios.post("/api/user/logout")
      .then(response => {
        this.setState({
          errorMessage: "",
          user: {},
          loggedIn: false,
          redirect: true
        })      
      })
  }

  render() {

  
  const loggedIn = this.state.loggedIn

    return (

      <IdentityContext.Provider value={{
        user: this.state.user,
        loggedIn: this.state.loggedIn,
        login: this.login,
        logout: this.logout
      }}>
      <Router>
        {this.logoutHandler()}
        <div>
          <Switch>
            <Route exact path="/login" render={(props) => loggedIn ? ( 
              <Redirect to="/profile" render={(props) => <Profile {...props}  username={this.state.username}/>}/>
            ):(
              <Login {...props} loginHandler={this.login} username={this.state.username} password={this.state.password} handleInput={this.handleInputChange} />
            )
          } />
            <Route exact path="/chat" component={ChatPage} />
            <Route exact path="/create" render={(props) => <Create {...props} inputProfiles={this.login} username={this.state.username} password={this.state.password} handleInput={this.handleInputChange} />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/activeusers" component={ActiveUsers} />
            <Route exact path="/data" component={AllData} />
            <Route exact path="/input" component={UploadImage} />
            <Route exact path="/jams" component={AllJams} />
            <Route exact path="/:userName" component={ProfileData} />
            <Route component={NotFound} />
    
)}/>
            <Route component={withRouter(Login)} />
          </Switch>
<Footer />
        </div>
      </Router>
       </IdentityContext.Provider>
    );
  }
}

export default App;
