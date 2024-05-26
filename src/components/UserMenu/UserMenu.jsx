import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import Button from "@mui/material/Button";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}!</p>
      <Button variant="contained" onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>

      <NavLink to="/contacts">
        <Button variant="contained">Contacts</Button>
      </NavLink>
    </div>
  );
}
