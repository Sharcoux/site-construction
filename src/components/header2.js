import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/button2';
import { SCRIPT_FONT, MAIN_FONT } from 'themes';

const Container = styled.header`
  @keyframes grow{
    0% { transform:scale(1)}
    50% { transform:scale(1.2)}
  }

  padding: 3em;
  color: white;
  text-shadow: 1px 1px 1px #333;
  text-align: center;
  border-radius: 0 0 85% 85% / 30%;
  overflow: hidden;
  position: relative;
  &:before{
    content:"";
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:#1B2030 url(${props => props.image}) top center no-repeat;
    background-size:cover;
    background-attachment:fixed;
    animation: grow 60s  linear 10ms infinite;
    transition:all 0.2s ease-in-out;
    z-index:-2
  }
`;

const Title = styled.h1`
  font-family: ${SCRIPT_FONT};
  margin-top: 0;
`;

const Subtitle = styled.h2`
  font-family: ${MAIN_FONT};
`;

const Text = styled.p`
  font-family: ${MAIN_FONT};
`;

const StyledButton = styled(Button)`
  text-shadow: none;
  margin: 2em;
`;

const Header = ({title, subtitle, text, image, button}) => (
  <Container image={image}>
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
  image: PropTypes.string.isRequired,
}

export default Header;