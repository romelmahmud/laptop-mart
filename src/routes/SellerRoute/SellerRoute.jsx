import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";
import useCheckSeller from "../../hooks/useCheckSeller";
import Spinner from "../../shared/Spinner/Spinner";

const SellerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useCheckSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Spinner />;
  }
  if (user && !isSeller) {
    logOut();
  }
  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
