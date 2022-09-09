import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  checkContact,
  deleteCheckedContact,
} from 'redux/contacts/items/items-slice';
import s from './ContactList.module.css';
import { getFilteredContacts } from 'redux/contacts/items/items-selectors';

const ContactLists = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const handleCheckboxChange = e => {
    const contactId = e.target.name;
    dispatch(checkContact(contactId));
  };

  const handleDeleteAllClick = () => {
    const uncheckedContact = contacts.filter(({ checked }) => !checked);
    dispatch(deleteCheckedContact(uncheckedContact));
  };

  const activeButton = contacts.some(({ checked }) => checked);

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
      {contacts.length !== 0 && (
        <button
          className={s.btn}
          onClick={handleDeleteAllClick}
          type="button"
          disabled={!activeButton}
        >
          Delete checked
        </button>
      )}
    </ul>
  );
};

export default ContactLists;
