import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/auth/authContext";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
      toast.success("User Successfully Logout");
    });
  };
  return (
    <div className="shadow-sm bg-violet-100">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="w-[120px]">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="text-lg text-violet-900 font-medium">
                <Link to="/blog">Blog</Link>
              </li>

              {user?.uid ? (
                <>
                  <li className="text-lg text-violet-900 font-medium">
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                  <li className="text-lg text-violet-900 font-medium">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </>
              ) : (
                <li className="text-lg text-violet-900 font-medium">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          {/* <div className="navbar-end">
            <a className="btn">Get started</a>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
