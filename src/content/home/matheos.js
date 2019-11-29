import React from 'react';
import styled from 'styled-components';
import Text from '../../components/text';
import Image from '../../components/image';
import lang from '../../languages';
import theme from '../../themes';
import logo from '../../images/inSchool.svg';
import Button from '../../components/button';

const Container = styled.div`
  padding: 3em 0;
  background: ${theme.color.color6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 35em;
  flex-wrap: wrap;
  margin-bottom: 3em;
`;

const Logo = styled.div`
    height: 6em;
    flex: 1;
    margin: 0 3em;
    min-width: 8em;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-top: 0;
  color: ${theme.color.color3};
  padding: 0;
  margin: 0 3em;
  text-align: center;
  flex: 1;
  min-width: 8em;
`;

const Presentation = () => (
  <Container>
    <Row>
        <Logo>
            <Image src={logo} title={'logo'}/>
        </Logo>
        <Title>{lang.t('matheos.title')}</Title>
    </Row>
    <Button>{lang.t('matheos.action')}</Button>
  </Container>
);

export default Presentation;