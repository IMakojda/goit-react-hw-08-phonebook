import { Link } from "./Navigation.styled";
import { useSelector } from "react-redux";
import authSelector from "Redux/AuthReducer/Selector";

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn)
  return (
    <nav>
      {isLoggedIn ? <Link to="/contacts">Contacts</Link> : <Link to="/">Home</Link>}
    </nav>
  );
};