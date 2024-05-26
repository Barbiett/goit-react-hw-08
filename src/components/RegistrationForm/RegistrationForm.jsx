import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/operationsAuth";
import {
  selectIsErrorRegister,
  selectIsLoading,
} from "../../redux/auth/selectorsAuth";
import css from "../LoginForm/LoginForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const errorRegistration = useSelector(selectIsErrorRegister);
  const isLoading = useSelector(selectIsLoading);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
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
            <label htmlFor="name" className={css.label}>
              Username
            </label>
            <Field type="text" id="name" name="name" className={css.field} />
            <ErrorMessage name="name" component="div" className={css.errMsg} />
          </div>
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
            Register
          </button>
          {errorRegistration && (
            <p className={css.p}>
              Unfortunately, something went wrong with registration process.
              Please, try again!
            </p>
          )}
        </Form>
      </Formik>
      {isLoading && <Loader />}
    </>
  );
}
