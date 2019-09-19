import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MAIN_FONT, TEXT_COLOR } from 'themes';

export default styled.div`
  color: ${props => props.color || TEXT_COLOR};
  font-family: ${MAIN_FONT};
  text-align: justify;
`;