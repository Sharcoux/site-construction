import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
`

const Image = ({src, alt, title, ...props}) => (
  <StyledImage src={src} alt={alt || title} title={title} {...props} />
)


Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Image;