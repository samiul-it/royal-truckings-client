import React from 'react';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const date = new Date().toLocaleTimeString();
  
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Royal Truckings BD LTD.</h1>
            <p className="lead">
              Welcome to Royal Truckings BD LTD. warehouse management website.
              <Link className="btn-link" to="/register">
                Signup
              </Link>{" "}
              to use the cool features.
            </p>
          </div>
        </div>
        <Banner></Banner>
        <Items></Items>
        <div className="card text-center">
          <div className="card-header">Hub of Trucks</div>
          <div className="card-body">
            <h5 className="card-title">Explore New Collections</h5>
            <p className="card-text">
              We have various items,You can also add your items in our warehouse.
            </p>
            <Link to='/items' className="btn btn-primary">
              See All Items
            </Link>
          </div>
          <div className="card-footer text-muted">Last Update:{date} Today</div>
        </div>
      </div>
    );
};

export default Home;