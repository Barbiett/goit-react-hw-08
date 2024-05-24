import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
// import Kubik from "../../components/Kubik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operationsContacts";
import {
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectorsContacts";

import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
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
        <div>{/* <Kubik /> */}</div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Opps! Error!{error.message}. Try reloading the page!</p>}
      <ContactList />
    </div>
  );
}
