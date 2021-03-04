import React, { Component } from "react";
import { Route } from "react-router";
import NavHome from "./NavHome";
import LoginComponent from "./LoginComponent";
import ForgotPass from "./ForgotPass";
import Dashboard from "./Dashboard";
import SignupComponent from "./SignUpComponent";
import HomePic from "./HomePic.jpeg";

class Home extends Component {
  render() {
    return (
      <div className="Home" >
        <NavHome  style={{
        backgroundImage: `url(${HomePic})`}}/>
       <Route path="/public" component={Dashboard} />
        <Route path="/public" component={LoginComponent} />
    
        <Route path="/public" component={SignupComponent} />
        <Route path="/public" component={ForgotPass} />
      </div>
    );
  }
}
export default Home;
