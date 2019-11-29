import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../images/children.webp';
import Page from '../../components/page';
import Button from '../../components/button';
import lang from '../../languages';
import theme from 'themes';

const TitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-shadow: 1px 1px 10px #000;
  font-size: 2em;
  padding: 0;
  margin: 0;
  margin-bottom: 0.3em;
  width: 14em;
  max-width: 90vw;
  line-height: 1.1;
`;

const Subtitle = styled.h2`
  text-shadow: 1px 1px 10px #000;
  font-weight: normal;
  font-size: 1em;
  margin: 0;
  margin-bottom: 2em;
  padding: 0;
`;

const Welcome = () => (
  <Page background={backgroundImage} fixed={true}>
    <TitleContainer>
      <Title>{lang.t('welcome.title')}</Title>
      <Subtitle>{lang.t('welcome.subtitle')}</Subtitle>
      <Button>{lang.t('welcome.action')}</Button>
    </TitleContainer>
  </Page>
);

export default Welcome;