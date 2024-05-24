import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Registeration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}
