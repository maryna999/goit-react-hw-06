import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = ({ contacts, filter, isInputValid }) => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.length === 0 && !isInputValid && filter && (
        <li>No matches found!</li>
      )}
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
