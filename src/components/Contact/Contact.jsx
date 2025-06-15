import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
