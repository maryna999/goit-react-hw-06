import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.length === 0 ? (
        <li>No matches found!</li>
      ) : (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={() => dispatch(deleteContact(contact.id))}
          />
        ))
      )}
    </ul>
  );
};

export default ContactList;
