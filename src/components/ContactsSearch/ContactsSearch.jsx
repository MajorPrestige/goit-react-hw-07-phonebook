import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filter/filter-slice';
import { getFilter } from 'redux/contacts/filter/filter-selectors';
import s from './ContactsSearch.module.css';

const ContactsSearch = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        onChange={filterContact}
        value={filter}
        type="text"
      />
    </label>
  );
};

export default ContactsSearch;

ContactsSearch.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.string,
};
