import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./RegisterForm.css";
import { ToastContainer, toast } from 'react-toastify';


const RegisterForm = () => {

const notify = () => toast("Registration Successful!");

const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    // alert("Registration Successful!");
    reset();
  };

  return (
    <div className="register-container">
      <h2 className="title">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
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

        {/* Mobile Number */}
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.mobile && <p className="error">{errors.mobile.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "Date of Birth is required" })}
          />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address</label>
          <textarea
            rows="3"
            placeholder="Enter your full address"
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 10,
                message: "Address should be at least 10 characters long",
              },
            })}
          ></textarea>
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value, formValues) =>
                value === formValues.password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button onClick={notify} type="submit" className="submit-btn">
          Register
        </button>
                <ToastContainer />


        {/* Login Link */}
        <p className="login-text">
          Already registered?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
