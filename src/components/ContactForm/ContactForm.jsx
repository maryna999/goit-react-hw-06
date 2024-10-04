import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useState } from "react";
import { selectContacts } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [errorMessage, setErrorMessage] = useState("");
  const [numberInputClass, setNumberInputClass] = useState("");

  const handleNumberInput = (e) => {
    const inputValue = e.target.value;

    if (/[^0-9]/.test(inputValue)) {
      setErrorMessage("Enter number!");
      e.target.value = inputValue.replace(/\D/g, "");
    } else {
      setErrorMessage("");
    }

    if (inputValue.length >= 7) {
      setNumberInputClass(s.valid);
    } else if (inputValue.length > 0) {
      setNumberInputClass(s.invalid);
    } else {
      setNumberInputClass("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    const isDuplicate = contacts.some(
      (contact) => contact.name === name || contact.number === number
    );

    if (isDuplicate) {
      setErrorMessage("Contact with this name or number already exists.");
      return;
    }

    if (number.length < 7) {
      alert("Number must be at least 7 digits long.");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    event.target.reset();
    setErrorMessage("");
    setNumberInputClass("");
  };

  return (
    <div className={s.contactForm}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>Name</label>
        <input className={s.input} name="name" type="text" required />
        <label className={s.label}>Number</label>
        <input
          className={`${s.input} ${numberInputClass}`}
          name="number"
          type="tel"
          required
          minLength="7"
          onInput={handleNumberInput}
        />
        {errorMessage && <p className={s.error}>{errorMessage}</p>}
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
