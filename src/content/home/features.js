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
  background: white;
  justify-content: stretch;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-top: 0;
  color: ${theme.color.color2};
  padding: 0;
  margin: 1em 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7em;
  height: 7em;
  margin: 0.5em;
  background: ${props => props.color};
  border-radius: 0.8em;
`;

const Name = styled.div`
  font-weight: 500;
  padding-top: 0.2em;
`;

const Logo = styled.div`
  height: 1.5em;
`;

const Card = ({logo, title, color}) => (
  <CardContainer color={color} >
    <Logo>
      <Image title={title} src={logo} />
    </Logo>
    <Name>{lang.t('features.'+title)}</Name>
  </CardContainer>
);

const Features = () => (
  <Container>
    <Title>{lang.t('features.title')}</Title>
    <Row>
      <Card title="operation" logo={temp} color={theme.color.color1} />
      <Card title="table" logo={temp} color={theme.color.color3} />
      <Card title="geometry" logo={temp} color={theme.color.color4} />
      <Card title="function" logo={temp} color={theme.color.color2} />
    </Row>
  </Container>
);

export default Features;