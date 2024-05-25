import { Form, Formik, Field } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectFilter,
} from "../../redux/filters/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const inputId = useId();

  return (
    <Formik initialValues={{ filter: "" }} onSubmit={() => {}}>
      <Form>
        <div className={css.form}>
          <label htmlFor={inputId}>Find contacts by name or number</label>
          <Field
            className={css.field}
            name="filter"
            id={inputId}
            value={filter}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          ></Field>
        </div>
      </Form>
    </Formik>
  );
}
