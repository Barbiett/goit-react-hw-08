import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {contacts.length > 0 ? (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </ul>
      ) : (
        <p className={css.p}>No contacts yet. Lets start!</p>
      )}
    </div>
  );
}
