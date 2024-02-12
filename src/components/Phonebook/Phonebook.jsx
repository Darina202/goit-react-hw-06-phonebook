import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { addContact, deleteContact } from '../../redux/contacts-slice';
import { changeFitler } from '../../redux/filter-slice';
import { getFilteredContacts } from '../../redux/selectors';
import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const filteredContact = ({ name }) => {
    const normalizeName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizeName;
    });
    return Boolean(dublicate);
  };

  const toAddContact = data => {
    if (filteredContact(data)) {
      return alert(`Contact ${data.name} already in list`);
    }
    dispatch(addContact(data));
  };

  const toDeleteContact = id => dispatch(deleteContact(id));

  const toChangeFitler = ({ target }) => dispatch(changeFitler(target.value));

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={toAddContact} />
      <h2>Contacts</h2>
      <p className={styles.text}>Find contact by name</p>
      <input
        type="text"
        name="filter"
        onChange={toChangeFitler}
        className={styles.filter}
      />
      <ContactList items={contacts} deleteContact={toDeleteContact} />
    </div>
  );
};

export default Phonebook;
