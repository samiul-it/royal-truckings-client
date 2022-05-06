import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./GoogleSignIn.css";
import auth from "./../../../Firebase/Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./../../Loading/Loading";
import { toast } from 'react-toastify';
import { async } from "@firebase/util";



const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const loginWithGoogle =async () => {
   await signInWithGoogle();
    
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("Sign in Successful");
    }
  }, [user]);

  if (error) {
    toast.error(error.message);
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <button onClick={loginWithGoogle} className="btn btn-info">
        {" "}
        <FcGoogle></FcGoogle> Log in With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
