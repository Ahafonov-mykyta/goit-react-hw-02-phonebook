import ContactListItem from './Contact';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, onDelete }) {
  if (filter !== '') {
    return;
  }

  return (
    <ul className="contacts-list">
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};
