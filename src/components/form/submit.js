import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button``;

const Submit = ({value, children}) => (
  <Button type="submit" >{children}</Button>
);

Submit.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Submit;