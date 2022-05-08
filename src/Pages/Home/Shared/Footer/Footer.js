import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiFillInfoCircle,
  AiOutlinePicRight,
  AiOutlineLogin,
  AiFillCheckSquare,
} from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
    return (
      <div>
        <div className="footer">
          <div className="footer-links">
            <Link to="/Home">
              <AiOutlineHome></AiOutlineHome>
            </Link>
            <Link to="/blogs">
              <AiOutlinePicRight></AiOutlinePicRight>
            </Link>
            <Link to="/login">
              <AiOutlineLogin></AiOutlineLogin>
            </Link>
            <Link to="/Register">
              <AiFillCheckSquare></AiFillCheckSquare>
            </Link>
            <Link to="/about">
              <AiFillInfoCircle></AiFillInfoCircle>
            </Link>
          </div>
          <div className="footer-caption">
            <h6>Top Suppliers</h6>
            <div className="top-suppliers">
              <p>HINO AK</p>
              <p>Tata Banladesh </p>
              <p>Ashok Leyland BD</p>
              <p>FUSO C/O Mitsubishi</p>
              <p>HINO Recon </p>
            </div>
            <h6>Top Items</h6>
            <div className="top-products">
              <p>HINO AK</p>
              <p>Eicher </p>
              <p>Ashok Leyland LT</p>
              <p>FUSO XTL</p>
              <p>Mahindra </p>
            </div>
          </div>
          <p>&copy; Samiul Islam Talukdar {year}</p>
        </div>
      </div>
    );
};

export default Footer;