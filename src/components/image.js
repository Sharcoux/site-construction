import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lang from '../languages';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.cover ? "cover" : "contain"};
`

const Image = ({src, title, cover = false}) => (
  <StyledImage
    src={src || lang.t(`img.${title}.src`)}
    alt={lang.t(`img.${title}.alt`) || title}
    title={lang.t(`img.${title}.title`) || title}
    cover={cover}
  />
)


Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.bool
}

export default Image;