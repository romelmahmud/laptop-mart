import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";
import useCheckAdmin from "../../hooks/useCheckAdmin";
import useCheckBuyer from "../../hooks/useCheckBuyer";
import useCheckSeller from "../../hooks/useCheckSeller";
import Header from "../../shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useCheckAdmin(user?.email);
  const [isSeller] = useCheckSeller(user?.email);
  const [isBuyer] = useCheckBuyer(user?.email);
  return (
    <div c>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side  bg-violet-50 border-r-2">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedproducts">
                    Reported Products
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
