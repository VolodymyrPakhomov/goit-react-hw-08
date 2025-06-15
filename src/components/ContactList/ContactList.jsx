import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
import styles from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectIsLoading);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  if (isLoading) return <p>Loading...</p>;
  if (!filteredContacts.length) return <p>No contacts found</p>;

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
