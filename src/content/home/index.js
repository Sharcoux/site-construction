import React from 'react';
import styled from 'styled-components';
import Welcome from './welcome';
import Clients from './clients';
import Testimony from './testimony';
import Products from './products';
import Documentation from './docs';
import Presentation from './presentation';
import Contacts from './contacts';
import Features from './features';
import Menu from '../../components/menu';
import theme from '../../themes';
import lang from '../../languages';
import ScrollableAnchor from 'react-scrollable-anchor'
import PropTypes from 'prop-types';

const Container = styled.div``;
const SectionsContainer = styled.div`
  position: relative;
`;
const MenuBackground = styled.div`
  position: sticky;
  top: 0;
  background: ${theme.color.color5};
  z-index:1;
  height: 5em;
`;

const Part = (name = "name", Component) => (
  <ScrollableAnchor id={name}>
    <Component />
  </ScrollableAnchor>
);

Part.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
}

/*
<Menu menus={Object.keys(lang.t('menu'))} />
<Part name={"welcome"} component={Welcome} />
<SectionsContainer>
  <MenuBackground />
  <Part name={"clients"} component={Clients} />
  <Part name={"testimony"} component={Testimony} />
  <Part name={"products"} component={Products} />
  <Part name={"contacts"} component={Contacts} />
</SectionsContainer>
*/
console.log(Object.keys(lang.t('menu')));

const Home = () => (
  <Container>
    <Menu menus={Object.keys(lang.t('menu'))} />
    <Welcome />
    <SectionsContainer>
      <MenuBackground />
      <Products />
      <Presentation />
      <Features />
    </SectionsContainer>
  </Container>
);

export default Home;