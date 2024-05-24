import { Formik, Form, Field } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";

import { authorizationUser } from "../../redux/auth/operationsAuth";
import { selectIsError } from "../../redux/auth/selectorsAuth";
export default function LoginForm() {
  const error = useSelector(selectIsError);
  const dispatch = useDispatch();
  const userEmailIdLogin = useId();
  const userPasswordIdLogin = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(authorizationUser(credentials))
      .unwrap()
      .then()
      .catch(() => {
        toast("Login error! Try again!");
      });

    form.reset();
  };

  return (
    <div>
      <h1>Hello user!</h1>
      <Formik initialValues={{ useremail: "", userpassword: "" }}>
        <Form>
          <div>
            <label htmlFor={userEmailIdLogin}>Enter your Email.</label>
            <Field name="useremail" id={userEmailIdLogin}></Field>
            <label htmlFor={userPasswordIdLogin}>Enter your password.</label>
            <Field name="userpassword" id={userPasswordIdLogin}></Field>
          </div>
        </Form>
      </Formik>
      <Button variant="contained" onSubmit={handleSubmit}>
        Log in.
      </Button>
      {error && (
        <p>
          Unfortunately, something wrong with registration. Please, try again!
        </p>
      )}
    </div>
  );
}
