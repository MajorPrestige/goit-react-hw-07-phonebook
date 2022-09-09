import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

const ContactsItem = ({
  name,
  number,
  id,
  handleCheckboxChange,
  handleDeleteClick,
}) => {
  return (
    <li className={s.item}>
      <input type="checkbox" name={id} onChange={handleCheckboxChange} />
      <p>
        {name}: {number}
      </p>
      <button
        onClick={() => {
          handleDeleteClick(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCheckboxChange: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};
