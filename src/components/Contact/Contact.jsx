import s from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <div className={s.itemContent}>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button className={s.delete} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
