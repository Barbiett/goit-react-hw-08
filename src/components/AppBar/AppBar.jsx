import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectorsAuth";
import css from "./AppBar.module.css";
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.nav}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
