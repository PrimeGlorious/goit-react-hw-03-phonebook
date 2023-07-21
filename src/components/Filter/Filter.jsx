import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onInputChange, filter }) => {
  return (
    <FilterLabel>
      <b>Find contacts by name</b>
      <FilterInput type="text" name='filter' value={filter} onChange={onInputChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};
