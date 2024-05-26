import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../../components/AuthNav";
import css from "./HomePage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <div>
          <h1 className={css.header}>Welcome to our Contact Management App!</h1>
          <p className={css.paragraph}>
            Thank you for using our app to manage your contacts! If you have any
            questions, find a bug, or have suggestions for improvements, feel
            free to{" "}
            <a
              className={css.emailLink}
              href="mailto:bogdanvinokurov2000@gmail.com"
            >
              email me
            </a>
            . Enjoy using the app!
          </p>
        </div>
      ) : (
        <div>
          <p className={css.paragraph}>
            Welcome! Here is a modern, convenient, and free application for
            managing your contacts! You can add and remove contacts as much as
            you like. All you need to do is register or log in. Enjoy using the
            application!
          </p>
          <AuthNav />
        </div>
      )}
    </div>
  );
}
