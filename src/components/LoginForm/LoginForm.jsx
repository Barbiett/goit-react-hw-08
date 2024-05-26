import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { authorizationUser } from "../../redux/auth/operations";
import {
  selectIsLoading,
  selectIsErrorAuthorization,
} from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const errorLogin = useSelector(selectIsErrorAuthorization);
  const isLoading = useSelector(selectIsLoading);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authorizationUser(values));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formEl}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field type="email" id="email" name="email" className={css.field} />
            <ErrorMessage name="email" component="div" className={css.errMsg} />
          </div>
          <div className={css.formEl}>
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={css.field}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.errMsg}
            />
          </div>

          <button className={css.button} type="submit">
            Log in
          </button>
          {errorLogin && (
            <p className={css.p}>
              Unfortunately, something went wrong with log in process. Please,
              try again!
            </p>
          )}
        </Form>
      </Formik>
      {isLoading && <Loader />}
    </>
  );
}
