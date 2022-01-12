import { PropTypes } from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid';
import FilterStyled from './Filter.styled';

const Filter = ({ onChange }) => {
  const filterId = uuid();
  return (
    <FilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} onChange={onChange} name="filter" />
    </FilterStyled>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
