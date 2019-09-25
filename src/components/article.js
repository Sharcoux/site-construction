import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/button3';
import theme from 'themes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 18em;
`;

const Title = styled.div`
  font-size: 2em;
  font-family: ${theme.font.menu};
  text-transform : uppercase;
  color: ${theme.color.title1};
  font-weight: 900;
`;

const Subtitle = styled.div`
  font-size: 1.5em;
  font-family: ${theme.font.cursive};
  margin-bottom: 1.5em;
`;

const Article = ({background, color, fixed, children = [], ...props}) => (
  <Container>
    <Title>L'ORIENTATION EST UN JEU</Title>
    <Subtitle>Qui a dit que l'orientation devait être une étape difficile ?</Subtitle>
    <Button title={"Accéder à l'application"} color={"#ff4da3"} />
  </Container>
);

Article.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  fixed: PropTypes.bool,
}

export default Article;