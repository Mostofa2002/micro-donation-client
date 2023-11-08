import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useAuth();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignUpHandle = (e) => {
    e.preventDefault();
    setPassword("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(email, password, name);

    if (password.length < 6) {
      setPassword("Opps! Password must contain minimum 6 characters");
      return;
    } else if (!/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPassword(
        "Opps! Password must contain special characters and capital latter"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Wow!",
          text: "You Sign Up Sucessfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Back",
        });
      });
  };

  return (
    <div className="my-20">
      <Helmet>
        <title> Micro Food | Register</title>
      </Helmet>
      <section className="">
        <div className="container flex items-center justify-center  px-6 mx-auto">
          <div className="w-full max-w-lg ">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-24 rounded-full"
                src="https://i.pinimg.com/474x/8e/99/75/8e9975bce28e15e56ee6089ba95f96ac.jpg"
                alt=""
              />
            </div>
            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome, Sign Up Here!.
            </p>

            <div className="flex items-center justify-center mt-6"></div>

            <form onSubmit={SignUpHandle}>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  className="block w-full py-3 text-black bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Username"
                />
              </div>

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <i className=" text-gray-300 ml-2 mt-1 text-lg fa-solid fa-link"></i>
                </span>
                <input
                  type="text"
                  name="photo"
                  className="block w-full py-3 text-black bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Photo URL"
                />
              </div>

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email Address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  name="password"
                />
              </div>

              {password && (
                <p className="text-red-700 font-bold mt-5  ">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {password}
                </p>
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  SignUp
                </button>
              </div>
            </form>

            <div className="mt-6 text-center ">
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Already have an account?
              </a>
            </div>
            <div className="mt-6">
              <Link to="/login">
                <button className="w-full mt-4 px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
                  LogIn
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
