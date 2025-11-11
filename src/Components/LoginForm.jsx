import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "../ContextApi/UserContext";


const LoginForm = () => {

  let {name, setName} = useContext(UserContext)
  let uname = useRef()

        const notify = () => toast("Logged In Successfully!");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // alert("Login Successful!");
    setName(uname.current.value)
    reset();
  };

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input ref={uname}
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button onClick={notify} type="submit" className="submit-btn">
          Login
        </button>
                <ToastContainer />


        {/* Register Link */}
        <p className="register-text">
          Don’t have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
