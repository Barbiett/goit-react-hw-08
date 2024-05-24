import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Registeration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
