import React from 'react';
import { useRef } from 'react';
import './PasswordReset.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from './../../../Firebase/Firebase.init';

const PasswordReset = () => {

    const [sendPasswordResetEmail, sending, error] =
      useSendPasswordResetEmail(auth);
    
    const emailRef=useRef("");
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast.info("Password Reset Email Sent", {
        });
      } else {
        toast.error("Please enter your email address", {
        });
      }
    };
    return (
      <div>
        <h2>Please Enter Your Email</h2>
        <form>
          <div className="form-fields mx-auto">
            <input
              ref={emailRef}
              required
              type="email"
              placeholder="Please enter your registered email"
            />
            <button onClick={handlePasswordReset} className="btn btn-success">
              Request Password Reset
            </button>
          </div>
        </form>
      </div>
    );
};

export default PasswordReset;