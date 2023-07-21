import PropTypes from 'prop-types';
import { ContactItem } from "./ContactItem/ContactItem"

export const ContactList = ({ filteredContacts, onDeleteBtn }) => (
  <ul>
    {filteredContacts().map(({ id, name, number }) => {
      return <ContactItem key={id} name={name} id={id} number={number} onDeleteBtn={onDeleteBtn} />
    })}
  </ul>
);

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  onDeleteBtn: PropTypes.func.isRequired
}
