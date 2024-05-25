import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectorsAuth";

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header style={{ display: "flex", justifyContent: "space-around" }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};