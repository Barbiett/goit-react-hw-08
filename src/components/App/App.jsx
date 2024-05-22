import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Kubik from "../Kubik";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { isError, isLoading } from "../../redux/contactsSlice";

import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(isError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.box}>
        <div>
          <h1 className={css.header}>Phonebook</h1>
          <ContactForm />
          <SearchBox />
        </div>
        <div>
          <Kubik />
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Opps! Error!{error.message}. Try reloading the page!</p>}
      <ContactList />
    </div>
  );
}
