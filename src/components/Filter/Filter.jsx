import PropTypes from 'prop-types';

export default function Filter({
  handleChange,
  filter,
  filteredContacts,
  onDelete,
}) {
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      {filter && (
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                <p>
                  {contact.name} : {contact.number}
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
          })}
        </ul>
      )}
    </>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func,
  onDelete: PropTypes.func,
  filter: PropTypes.string,
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
