import React from 'react';
import styled from 'styled-components';
import Text from '../../components/text';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
  padding: 2em 4em;
  background: ${theme.color.color1};
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-top: 0;
`;

const Presentation = () => (
  <Container>
    <Title>{lang.t('presentation.title')}</Title>
    <Text>{lang.t('presentation.content')}</Text>
  </Container>
);

export default Presentation;