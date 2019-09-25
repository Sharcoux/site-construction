import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../images/children.webp';
import Page from '../../components/page';
import lang from '../../languages';

const TitleContainer = styled.div`
  border: 1px solid #000;
  text-shadow: 1px 1px 1px black;
  padding: 0 0.8em;
  position: absolute;
  left: 2em;
  bottom: 2em;
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  margin-bottom: 0.8em;
  text-transform : uppercase;
  width: 15em;
`;

const Subtitle = styled.h1`
  font-size: 1.5em;
  text-transform : uppercase;
  margin: 0;
`;

const Welcome = () => (
  <Page background={backgroundImage} fixed={true}>
    <TitleContainer>
      <Title>{lang.t('welcome.title')}</Title>
      <Subtitle>{lang.t('welcome.subtitle')}</Subtitle>
    </TitleContainer>
  </Page>
);

export default Welcome;