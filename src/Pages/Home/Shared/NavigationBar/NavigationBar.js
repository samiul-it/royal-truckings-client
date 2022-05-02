import React from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";
import './NavigationBar.css';
import {Link } from 'react-router-dom';
import logo from  '../../../../Resources/Images/navlogo-1.png';

const NavigationBar = () => {
    return (
      <div>
          <div className="navbar-container">
              <div className="nav-title-container">
                  <div className="nav-logo">
                      <img src={logo} alt="royal truckings bd" />

                  </div>
                  <div className="nav-title">
                      <h2>Royal Truckings BD LTD.</h2>

                  </div>

              </div>
              <div className="nav-items">
                  <Link to='/home'>Home</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/login'>Login</Link>
                  <Link to='/blogs'>Blogs</Link>
                  <Link to='/register'>Register</Link>

              </div>
          </div>
      </div>
    );
};

export default NavigationBar;