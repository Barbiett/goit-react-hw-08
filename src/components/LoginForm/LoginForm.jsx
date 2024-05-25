import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authorizationUser } from "../../redux/auth/operationsAuth";
import { selectIsError } from "../../redux/auth/selectorsAuth";

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);

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
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Log in</button>
        </Form>
      </Formik>

      {error && (
        <p>
          Unfortunately, something went wrong within registration process.
          Please, try again!
        </p>
      )}
    </>
  );
}
