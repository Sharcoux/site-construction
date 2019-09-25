import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../themes';
import lang from '../languages';
import Submit from '../components/form/submit';
import Image from '../components/image';
import InputField from '../components/form/inputField';

import temp from '../images/no-image.svg';

const Container = styled.div`
  background: ${theme.color.color6};
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  flex: 0 0 50%;
  padding: 2em 1em;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
`;

const Form = styled.form``;

const Footer = (setLang) => {console.log(lang.content, lang.content.footer.subscribe, lang.t('footer.subscribe'));return (
  <Container>
    <Title>{lang.t('footer.title')}</Title>
    <Row>
      <Column>
        <Text>{lang.t('footer.description')}</Text>
        <Form>
          <InputField name="firstname" type="text" required />
          <InputField name="email" type="email" required />
          <Submit>{lang.t('footer.subscribe')}</Submit>
        </Form>
      </Column>
      <Column>
        <Image src={temp} title="newsletter" />
      </Column>
    </Row>
  </Container>
);}

Footer.propTypes = {
  setLang: PropTypes.func.isRequired,
}

export default Footer;