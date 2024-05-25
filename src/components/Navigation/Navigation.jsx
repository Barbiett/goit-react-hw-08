import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectorsAuth";
import Button from "@mui/material/Button";

export default function Navigation() {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
