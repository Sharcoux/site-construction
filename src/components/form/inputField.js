import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  font-size: 1.3em;
  color: ${theme.color.text};
  margin: 5px 0;
`;

const InputField = ({required, name, type}) => (
  <Container>
    <Label>{lang.t(`form.${name}.label`)}</Label>
    <Input type={type || "text"} placeholder={lang.t(`form.${name}.placeholder`) || ''} name={name} required={required} />
  </Container>
);

InputField.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default InputField;