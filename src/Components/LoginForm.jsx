import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../ContextApi/UserContext";

const LoginForm = () => {
  let { name, setName } = useContext(UserContext);
  let uname = useRef();

  const notify = () => toast("Logged In Successfully!");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    setName(uname.current.value);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-6">
          Login
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              ref={uname}
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

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={notify}
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300"
          >
            Login
          </button>
          <ToastContainer />

          {/* Register Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
