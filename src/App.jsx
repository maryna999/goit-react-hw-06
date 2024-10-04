import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import { useState } from "react";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const [isInputValid, setIsInputValid] = useState(true);

  const handleFilterChange = (value) => {
    const isValid = /^[a-zA-Z\s]*$/.test(value);
    setIsInputValid(isValid);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox onFilterChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        isInputValid={isInputValid}
      />
    </div>
  );
}

export default App;
