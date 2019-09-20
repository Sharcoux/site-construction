import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'themes';

export default styled.div`
  color: ${props => props.color || theme.color.text};
  font-family: ${theme.font.main};
  text-align: justify;
`;