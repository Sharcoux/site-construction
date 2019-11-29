import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Label = styled.label``;

const Textarea = styled.textarea`
  margin: 5px 0;
  background: ${theme.color.color5};
  border-radius: 1em;
  padding: 0.5em 1em;
  border: none;
  font-family: ${theme.font.main};
  color: white;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: white;
  }
`;

const InputField = ({required, name, type}) => {
  const form = lang.t(`form.${name}`);
  return (
  <Container>
    {/* <Label>{lang.t(`form.${name}.label`)}</Label> */}
    <Textarea placeholder={form.placeholder || ''} name={name} required={required} />
  </Container>
);}

InputField.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default InputField;