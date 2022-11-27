import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";
import useCheckBuyer from "../../hooks/useCheckBuyer";
import Spinner from "../../shared/Spinner/Spinner";

const BuyerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useCheckBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Spinner />;
  }
  if (user && !isBuyer) {
    logOut();
  }
  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
