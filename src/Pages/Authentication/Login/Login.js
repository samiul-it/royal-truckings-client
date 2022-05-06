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
        navigate(from, { replace: true });
      }
    }, [user]);

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    console.log(email,password);
    signInWithEmailAndPassword(email,password);
    console.log("Login Successfull");
  }

  if (error) {
    return <h5 className="text-danger"> {error.message}</h5>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  

  return (
    <div>
      <h1>Welcome to Login Page</h1>
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
          <button className="btn btn-success">Login</button>
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
      </form>
    </div>
  );
};

export default Login;