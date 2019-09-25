import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../themes';
import logo from '../images/inSchool.svg';
import Image from '../components/image';
import lang from '../languages';

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Navigation = styled.nav`
  display: flex;
  max-width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
`;

const Item = styled.a`
  padding: 0 1em;
  font-weight: bold;
  transition: 0.5s all ease-out;
  font-family: ${theme.font.menu};
  white-space: nowrap;
  text-transform : uppercase;
  text-shadow: 1px 1px 1px black;
  
  &:hover {
    color: ${theme.color.color2};
  }
`;

const Logo = styled.div`
  height: 4em;
  margin-left: 1em;
`;

const Menu = ({menus}) => (
  <Container>
    <Logo>
      <Image src={logo} title={'logo'}/>
    </Logo>
    <Navigation>
      {menus.map(menu => <Item href={`#${menu}`}>{lang.t(`menu.${menu}`)}</Item>)}
    </Navigation>
  </Container>
);

Menu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Menu;