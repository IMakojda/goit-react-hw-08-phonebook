import { Container } from "./AppBar.styled";
import { Navigation } from "./Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelector from "Redux/AuthReducer/Selector";


export const AppBar = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn)
  return (
    <header>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>

  );
};