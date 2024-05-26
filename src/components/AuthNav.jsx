import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
export default function AuthNav() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        paddingBottom: "20px",
      }}
    >
      <NavLink to="/register">
        <Button variant="contained">Registeration</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="contained">Log In</Button>
      </NavLink>
    </div>
  );
}
