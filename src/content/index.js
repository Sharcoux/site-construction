import React from 'react';
import styled from 'styled-components';
import Home from './home';
import Footer from './footer';
import theme from '../themes';
import lang from '../languages'

const Container = styled.div`
  font-family: ${theme.font.main};
`;

const Site = () => {
  const [language, setLanguage] = React.useState('fr');//eslint-disable-line no-unused-vars
  function setLang(l = 'fr') {
    lang.setLang(l);
    setLanguage(l);
  }
  return (
    <Container>
      <Home />
      <Footer setLang={setLang} />
    </Container>
  );
  }

export default Site;