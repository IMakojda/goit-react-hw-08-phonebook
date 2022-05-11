import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelector from "Redux/AuthReducer/Selector";

export default function PublickRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const mustNavigate = isLoggedIn && restricted;
  return mustNavigate ? <Navigate to={redirectTo} /> : children;
}