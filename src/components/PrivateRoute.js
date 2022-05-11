import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelector from "Redux/AuthReducer/Selector";

export default function PrivateRoute({
  redirectTo = '/',
  children,
}) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />

};
