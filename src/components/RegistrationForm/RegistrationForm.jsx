import { Formik, Form, Field } from "formik";
import { useId } from "react";
import Button from "@mui/material/Button";
import { registerUser } from "../../redux/auth/operationsAuth";
// import { selectIsError } from "../../redux/auth/selectorsAuth";
// import { selectIsLoading } from "../../redux/auth/selectorsAuth";
import { useDispatch } from "react-redux";
export default function RegistrationForm() {
  const usernameIdRegistration = useId();
  const useremailIdRegistration = useId();
  const usernumberIdRegistration = useId();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const form = e.target;

    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(registerUser(credentials));

    form.reset();
  };

  return (
    <div>
      <h1>Hello new user!</h1>
      <Formik initialValues={{ username: "", useremail: "", usernumber: "" }}>
        <Form>
          <div>
            <label htmlFor={usernameIdRegistration}>Enter your username.</label>
            <Field name="username" id={usernameIdRegistration} />

            <label htmlFor={useremailIdRegistration}>Enter your Email.</label>
            <Field name="useremail" id={useremailIdRegistration} />

            <label htmlFor={usernumberIdRegistration}>
              Enter your password.
            </label>
            <Field name="usernumber" id={usernumberIdRegistration} />
          </div>
        </Form>
      </Formik>
      <Button variant="contained" onSubmit={handleSubmit}>
        Register.
      </Button>
    </div>
  );
}
