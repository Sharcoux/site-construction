import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SCRIPT_FONT, LIGHT_SECONDARY, DARK_SECONDARY, MAIN_FONT, MENU_FONT } from '../themes';
import logo from '../images/inSchool.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${DARK_SECONDARY};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Navigation = styled.div`
  display: flex;
  max-width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 1em;
`;

const Item = styled.span`
  padding: 0 1em;
  font-size: 1.1em;
  font-weight: bold;
  transition: 0.5s all ease-out;
  font-family: ${MENU_FONT};
  color: #c4edca;
  white-space: nowrap;
  text-transform : uppercase;
  
  &:hover {
    color: white;
  }
`;

const Logo = styled.img`
  height: 3em;
  padding: 1em;
`;


const Menu = ({menus}) => (
  <Container>
    <Logo src={logo} alt={'logo'} title={'logo'}/>
  <Navigation>
      {menus.map(menu => <Item>{menu}</Item>)}
    </Navigation>
  </Container>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Menu;