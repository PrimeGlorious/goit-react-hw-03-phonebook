import PropTypes from 'prop-types';
import { ContactCard, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDeleteBtn }) => (
  <ContactCard><p>{name}</p><p>{number}</p><DeleteBtn onClick={() => { onDeleteBtn(id) }}>Delete</DeleteBtn></ContactCard>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired
};
