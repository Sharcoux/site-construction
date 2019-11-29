import React from 'react';
import styled from 'styled-components';

import Toolbar from './toolbar';
import Welcome from './welcome';
import Presentation from './presentation';
import Matheos from './matheos';
import Features from './features';
import Video from './video';
import Testimony from './testimony';
import Contacts from './contacts';
import Education from './education';

import Menu from '../../components/menu';
import theme from '../../themes';
import lang from '../../languages';
import ScrollableAnchor from 'react-scrollable-anchor'
import PropTypes from 'prop-types';

const Container = styled.div``;

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
    <Toolbar />
    <Menu menus={Object.keys(lang.t('menu'))} />
    <Welcome />
    <Presentation />
    <Matheos />
    <Features />
    <Video />
    <Testimony />
    <Contacts />
    <Education />
  </Container>
);

export default Home;