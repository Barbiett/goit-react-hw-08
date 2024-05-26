import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Too Short")
    .max(50, "Max 50 letters!")
    .required("Is required"),
  usernumber: Yup.string()
    .min(3, "Min 3 numbers!")
    .matches(/^\d{1,50}$/, "Max 50 numbers!")
    .max(50, "Max 50 numbers!")
    .required("Is required!"),
});

export default function ContactForm() {
  const userNamumberId = useId();
  const userNameId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    const newContact = {
      name: values.username,
      number: values.usernumber,
      id: nanoid(),
    };

    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success("Successfully added!", {
          style: {
            backgroundColor: "white",
            color: "black",
          },
        });
      })
      .catch((error) => {
        toast.error(`Failed to add contact: ${error.message}`, {
          style: {
            backgroundColor: "white",
            color: "black",
          },
        });
      });
    actions.resetForm();
  }

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          username: "",
          usernumber: "",
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={css.input}>
            <label className={css.label} htmlFor={userNameId}>
              Name
            </label>
            <Field
              className={css.field}
              name="username"
              id={userNameId}
            ></Field>
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>
          <div className={css.input}>
            <label className={css.label} htmlFor={userNamumberId}>
              Number
            </label>
            <Field
              className={css.field}
              name="usernumber"
              type="number"
              id={userNamumberId}
            ></Field>
            <ErrorMessage
              className={css.error}
              name="usernumber"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
