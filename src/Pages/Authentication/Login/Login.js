import React from 'react';
import './Login.css';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../Firebase/Firebase.init';
import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Loading from './../../Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { BiLogInCircle } from "react-icons/bi";
import axios from 'axios';

const Login = () => {
  const emailRef=useRef("");
  const passwordRef=useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigateToLogin = () => {
      navigate("/login");
    };

    useEffect(() => {
      if (user) {
        
      }
    }, [user]);

  const handleFormSubmit=async(e)=>{
    e.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    console.log(email,password);
    await signInWithEmailAndPassword(email,password);
    console.log("Login Successfull");

    const { data } = await axios.post("https://royal-trucking-server.onrender.com/login",{email});
    console.log(data);
    localStorage.setItem('accessToken',data);
    navigate(from, { replace: true });
  }

  if (error) {
    return <h5 className="text-danger"> {error.message}</h5>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  

  return (
    <div>
      <h5>Please log in here</h5>
      <div className="login-container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-fields mx-auto">
            <input
              ref={emailRef}
              required
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              ref={passwordRef}
              type="password"
              required
              placeholder="Enter Your Password"
            />
            <button className="btn btn-success"> <BiLogInCircle></BiLogInCircle>Login</button>
          </div>
        </form>
        <div className="form-fields mx-auto">
          <GoogleSignIn></GoogleSignIn>
          <p>
            Don't have account?
            <Link
              className="text-primary"
              to="/register"
              onClick={navigateToLogin}
            >
              Click to Register
            </Link>
          </p>
          <Link
            className="text-primary"
            to="/password-reset"
            onClick={navigateToLogin}
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;