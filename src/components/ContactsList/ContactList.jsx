import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   deleteContact,
//   checkContact,
//   deleteCheckedContact,
// } from 'redux/contacts/list/list-slice';

import {
  getContacts,
  deleteContact,
  deleteCheckedContacts,
  checkContacts,
} from 'redux/contacts/list/list-operations';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { getFilteredContacts } from 'redux/contacts/list/list-selectors';
import s from './ContactList.module.css';

const ContactLists = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const handleCheckboxChange = ({ target }) => {
    const contactId = target.name;
    dispatch(checkContacts(contactId));
  };

  const handleDeleteAllClick = () => {
    const checkedContact = contacts.filter(({ checked }) => checked);
    dispatch(deleteCheckedContacts(checkedContact));
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
