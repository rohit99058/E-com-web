import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-6">
          Register
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: "Full name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Mobile Number
            </label>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Address
            </label>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={notify}
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300"
          >
            Register
          </button>
          <ToastContainer />

          {/* Login Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
