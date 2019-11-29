import React from 'react';
import styled from 'styled-components';
import Text from '../components/text';
import Image from '../components/image';
import lang from '../languages';
import theme from '../themes';
import logo from '../images/inSchool.svg';

const Container = styled.footer`
  padding: 2em 4em;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h3`
    font-size: 1.2em;
    font-weight: 100;
    letter-spacing: 0.35em;
    color: ${theme.color.color1};
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
`;

const Header = styled.h4`
    font-size: 1em;
    font-weight: bold;
    color: ${theme.color.color1};
    margin: 0;
    padding: 0;
`;

const Content = styled.div`
    color: grey;
    white-space: pre;
`;

const InfoContainer = styled.div`
  margin: 1.5em;
  text-align: center;
`;

const Info = ({type, value}) => (<InfoContainer>
  <Header>{lang.t('footer.'+type)}</Header>
  <Content>{value}</Content>
</InfoContainer>)

const Footer = () => (
  <Container>
    <Logo>
        <Image src={logo} title={'logo'}/>
        <Subtitle>{lang.t('presentation.subtitle')}</Subtitle>
    </Logo>
    <Info type={'address'} value={'Euratechnologies\n165 Avenue de Bretagne 59000 Lille'} />
    <Info type={'phone'} value={'06 63 91 75 15'} />
    <Info type={'email'} value={'contact@inschool.fr'} />
  </Container>
);

export default Footer;