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
  background: ${theme.color.color5};
  justify-content: stretch;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-top: 0;
  padding: 0;
  margin: 1em 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;
  width: 7em;
`;

const Number = styled.div`
    font-weight: bold;
`;

const Legend = styled.div`
    font-size: 0.8em;
    text-align: center;
`;

const Logo = styled.div`
    height: 2em;
`;

const Card = ({logo, title, count}) => (
  <CardContainer >
    <Logo>
        <Image title={title} src={logo} />
    </Logo>
    <Number>{count}</Number>
    <Legend>{lang.t('numbers.'+title)}</Legend>
  </CardContainer>
);

const Numbers = () => (
  <Container>
    <Row>
      <Card title="visit" logo={temp} count={30000} />
      <Card title="download" logo={temp} count={9000}/>
      <Card title="ergo" logo={temp} count={18} />
      <Card title="country" logo={temp} count={7} />
    </Row>
    <Title>{lang.t('numbers.title')}</Title>
  </Container>
);

export default Numbers;