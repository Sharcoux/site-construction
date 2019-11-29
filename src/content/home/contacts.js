import React from 'react';
import styled from 'styled-components';
import Image from '../../components/image';
import lang from '../../languages';
import theme from '../../themes';
import InputField from '../../components/form/inputField';
import Textarea from '../../components/form/textarea';
import Button from '../../components/button';

import temp from '../../images/no-image.svg';

const Container = styled.div`
  background: ${theme.color.color1};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 30em;
    padding: 1em 3em;
    max-width: 100vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1 1 50%;
  padding: 0 0.25em
`;

const Message = styled.div`
    width: 100%;
    height: 6em;
    padding: 0 0.25em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-top: 0;
  padding: 0;
  margin: 0.5em 0;
  text-align: center;
  flex: 1;
  min-width: 8em;
`;

const ButtonContainer = styled.div`
    color: ${theme.color.color1};
    text-align: center;
    padding-top: 2em;
`;

const Text = styled.div`
    font-size: 0.8em;
    text-align: justify;
`;

const Contacts = () => (
  <Container>
      <Form>
        <Title>{lang.t('contacts.title')}</Title>
        <Row>
            <Item><InputField name={'name'} required={true} /></Item>
            <Item><InputField name={'email'} required={true} type={'email'} /></Item>
        </Row>
        <Message>
            <Textarea name={'message'} />
        </Message>
        <ButtonContainer>
            <Button color={'white'}>{lang.t('contacts.submit')}</Button>
        </ButtonContainer>
        <Text>{lang.t('contacts.warning')}</Text>
      </Form>
  </Container>
);

export default Contacts;