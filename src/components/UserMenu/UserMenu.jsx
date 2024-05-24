import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/auth/operationsAuth";
import { selectUser } from "../../redux/auth/selectorsAuth";
import Button from "@mui/material/Button";
export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button variant="contained" onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>
    </div>
  );
}
