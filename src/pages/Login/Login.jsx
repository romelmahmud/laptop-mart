import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/images/google.png";
import loginImage from "../../assets/images/login.jpg";

const Login = () => {
  const [error, setError] = useState(false);
  return (
    <section
      className="hero bg-white"
      style={{ backgroundImage: `url("${loginImage}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex justify-center items-center lg:min-h-screen  lg:grid-cols-12">
        <div className=" px-8 py-8  lg:col-span-7 xl:col-span-6   rounded-md bg-gray-50 shadow-xl md:w-[450px]">
          <div className="">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-4xl  font-semibold text-center  text-gray-700">
                Login
              </h1>
            </div>

            <form
              // onSubmit={submitHandler}
              className="mt-4 grid grid-cols-12 gap-6"
            >
              <div className="col-span-12">
                <input
                  type="text"
                  placeholder="email"
                  onFocus={() => setError(false)}
                  className="input input-bordered w-full border-gray-400 bg-gray-50 "
                />
              </div>

              <div className="col-span-12 ">
                <input
                  type="password"
                  placeholder="password"
                  onFocus={() => setError(false)}
                  className="input input-bordered w-full border-gray-400 bg-gray-50 "
                />
              </div>
              <div className="col-span-12 ">
                {error && (
                  <p className="text-xl text-red-500">Invalid Credential</p>
                )}
              </div>

              <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md bottom-1 border border-gray-400 px-8 py-3 text-lg font-medium text-gray-500 transition hover:bg-violet-900 hover:text-white focus:outline-none focus:ring active:text-violet-900 w-full "
                >
                  Log In
                </button>
              </div>
              <div className="col-span-12 ">
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  Don't have an account?
                  <Link
                    to={"/register"}
                    className=" text-violet-900 font-semibold  underline "
                  >
                    <span className="ml-1 text-md">Register</span>
                  </Link>
                </p>
              </div>
            </form>
            <div className="divider text-gray-600">OR</div>

            <div className="flex justify-between ">
              <button
                // onClick={handleGoogleLogin}
                className="py-3 px-6  border border-gray-400  mr-4 text-gray-500 text-lg font-medium hover:bg-gray-200 transition rounded hover:text-violet-900 w-full"
              >
                {" "}
                <img
                  src={googleLogo}
                  alt=""
                  className="h-6 w-6 inline-block mr-3"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
