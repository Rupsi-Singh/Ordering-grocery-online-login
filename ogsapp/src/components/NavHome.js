import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { colors } from "material-ui/styles";
import HomePic from "./HomePic.jpeg";



export default class NavHome extends Component {
  render() {
    return (
      <div >
         
        <nav className="navbar navbar-expand-lg navbar- dark bg-dark mb-3">
          <Link className="navbar-brand" to={"/public"} style={{fontSize:"25px"}}>
            <i className="fab fa-foursquare"></i> Grocers
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
        
              <li className="nav-item">
                <Link to={"/public/loginComponent"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/public/signUpComponent"} className="nav-link">
                   Sign Up
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
