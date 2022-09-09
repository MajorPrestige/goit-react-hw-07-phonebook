import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/list/list-operations';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNameId = useRef(nanoid());
  const inputNumberId = useRef(nanoid());

  const dispatch = useDispatch();

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
      checked: false,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <label className={s.label} htmlFor={inputNameId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          id={inputNameId}
        />
      </label>

      <label className={s.label} htmlFor={inputNumberId}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
          id={inputNumberId}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactsForm;
ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
