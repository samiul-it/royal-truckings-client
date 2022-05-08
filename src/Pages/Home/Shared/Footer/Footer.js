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
          <p>&copy; Samiul Islam Talukdar {year}</p>
        </div>
      </div>
    );
};

export default Footer;