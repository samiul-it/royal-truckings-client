import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../../Firebase/Firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (data.password === data.confirmPassword) {
      createUserWithEmailAndPassword(data.email, data.password);
      console.log("User Created", data);
      toast.success("Registration Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
    } else {
      toast.error("Password did not matched!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (error) {
    return (
      <div>
        <p className="text-danger">Error: {error.message}</p>
        {toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h5>Welcome to Register Page!!</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields mx-auto">
          <input
            placeholder="Enter your Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-danger"> Required</span>}
          <input
            type="password"
            placeholder="Enter your Password"
            {...register("password", { required: true })}
          />

          {errors.password && <span className="text-danger">Required</span>}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <span className="text-danger">Please Confirm your password!</span>
          )}
          <br />

          <p id="account-offer">
            Already have an account?
            <Link
              className="text-primary"
              to="/login"
              onClick={navigateToLogin}
            >
              Login here
            </Link>
          </p>

          <button className="btn btn-warning">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
