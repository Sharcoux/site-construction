import React from 'react';
import styled from 'styled-components';
import Image from '../../components/image';
import lang from '../../languages';
import theme from '../../themes';

import temp from '../../images/no-image.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 4em;
  background: ${theme.color.color2};
  justify-content: stretch;
`;

const Logo = styled.div`
  width: 4em;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 0.5em 1em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
  font-size: 1.2em;
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${theme.color.color5};
  margin: 0;
`;


const Card = ({logo, title}) => (
  <CardContainer>
    <Logo>
      <Image title={title} src={logo} />
    </Logo>
    <TitleContainer>
      <Title>{lang.t(`features.${title}.title`)}</Title>
      <Subtitle>{lang.t(`features.${title}.subtitle`)}</Subtitle>
    </TitleContainer>
  </CardContainer>
);

const Features = () => (
  <Container>
    <Row>
      <Card title="program" logo={temp} />
      <Card title="offline" logo={temp} />
    </Row>
    <Row>
      <Card title="modular" logo={temp} />
      <Card title="children" logo={temp} />
    </Row>
    <Row>
      <Card title="easy" logo={temp} />
      <Card title="exam" logo={temp} />
    </Row>
  </Container>
);

export default Features;