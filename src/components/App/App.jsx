import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentInfoOfUser } from "../../redux/auth/operationsAuth";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectorsAuth";
import { Layout } from "../Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentInfoOfUser());
  }, [dispatch]);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            ></Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
