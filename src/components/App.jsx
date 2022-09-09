import ContactsForm from './ContactsForm/ContactsForm';
import ContactLists from './ContactsList/ContactList';
import ContactsSearch from './ContactsSearch/ContactsSearch';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactsForm />
      <h2>Contacts</h2>
      <ContactsSearch />
      <ContactLists />
    </div>
  );
};
