import PropTypes from 'prop-types';

export default function ContactListItem({ contact, onDelete }) {
  return (
    <li>
      <p>
        {' '}
        {contact.name} : {contact.number}{' '}
      </p>
      <button
        className="btn-delete"
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
