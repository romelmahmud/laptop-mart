import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="shadow-sm">
      <Container>
        <div className="navbar bg-base-100">
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
                  <NavLink to="/blog">Blog</NavLink>
                </li>

                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="w-[120px]">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="text-lg ">
                <NavLink to="/blog">Blog</NavLink>
              </li>

              <li className="text-lg">
                <NavLink to="/login">Login</NavLink>
              </li>
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
