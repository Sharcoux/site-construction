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
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #269ed8;
  padding: 1em 0;
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
  font-weight: normal;
  transition: 0.5s all ease-out;
  font-family: ${theme.font.menu};
  white-space: nowrap;
  
  &:hover {
    color: ${theme.color.color2};
  }
`;

const Logo = styled.div`
  height: 2em;
  margin-left: 4em;
  filter: saturate(0.5) brightness(0) invert(1);
`;

const Menu = ({menus}) => (
  <Container>
    <Logo>
      <Image src={logo} title={'logo'}/>
    </Logo>
    <Navigation>
      {menus.map(menu => <Item key={menu} href={`#${menu}`}>{lang.t(`menu.${menu}`)}</Item>)}
    </Navigation>
  </Container>
);

Menu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Menu;