import { Form, Formik, Field } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const userNameIdSearcBox = useId();

  return (
    <Formik
      initialValues={{
        username: "",
      }}
    >
      <Form>
        <div className={css.form}>
          <label htmlFor={userNameIdSearcBox}>Find contacts by name</label>
          <Field
            className={css.field}
            name="username"
            id={userNameIdSearcBox}
            value={value}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          ></Field>
        </div>
      </Form>
    </Formik>
  );
}
