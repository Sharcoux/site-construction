import React from 'react';
import styled from 'styled-components';
import Text from '../../components/text';
import Image from '../../components/image';
import lang from '../../languages';
import theme from '../../themes';
import logo from '../../images/inSchool.svg';

const Container = styled.div`
  padding: 2em 4em;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  width: 18em;
  padding: 0.5em;
  margin: 0 2em;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-top: 0;
  color: ${theme.color.color1};
  padding: 0;
  margin: 0;
  text-align: center;
  white-space: pre;
`;

const Subtitle = styled.h2`
  font-size: 1.2em;
  margin-top: 0;
  text-transform: uppercase;
  color: ${theme.color.color1};
  font-weight: 100;
  letter-spacing: 0.35em;
`;

const Argument = styled.li`
  color: ${theme.color.color2};
  position: relative;
  left: -1.5em;
  font-weight: 500;
`;

const Presentation = () => (
  <Container>
    <Row>
      <Cell>
        <Image src={logo} title={'logo'}/>
        <Subtitle>{lang.t('presentation.subtitle')}</Subtitle>
      </Cell>
      <Cell>
        <Title>{lang.t('presentation.title')}</Title>
      </Cell>
    </Row>
    <Row>
      <Cell><Argument>{lang.t('presentation.argument1')}</Argument></Cell>
      <Cell><Argument>{lang.t('presentation.argument2')}</Argument></Cell>
      <Cell><Argument>{lang.t('presentation.argument3')}</Argument></Cell>
      <Cell><Argument>{lang.t('presentation.argument4')}</Argument></Cell>
    </Row>
  </Container>
);

export default Presentation;