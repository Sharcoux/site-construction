import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/button2';
import Image from 'components/image';
import theme from 'themes';

const Container = styled.header`
  padding: 3em;
  background-image: ${props => props.image ? 'none' : `linear-gradient( 0deg, ${theme.color.lightSecondary} 10%, ${theme.color.darkSecondary} 100%)`};
  color: white;
  text-shadow: 1px 1px 1px #333;
  text-align: center;
  border-radius: 0 0 85% 85% / 30%;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  font-family: ${theme.font.cursive};
  margin-top: 0;
`;

const Subtitle = styled.h2`
  font-family: ${theme.font.main};
`;

const Text = styled.p`
  font-family: ${theme.font.main};
`;

const StyledButton = styled(Button)`
  text-shadow: none;
  margin: 2em;
`;

const Banner = styled(Image)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  filter: contrast(80%);
`;

const Header = ({title, subtitle, text, image, button}) => (
  <Container image={image}>
    <Banner src={image} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Text>{text}</Text>
    <StyledButton title={button} />
  </Container>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Header;