import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lang from '../languages';

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.cover ? "cover" : "contain"};
`

const Video = ({src, title, cover = false}) => (
  <StyledVideo
    src={src || lang.t(`video.${title}.src`)}
    alt={lang.t(`video.${title}.alt`) || title}
    title={lang.t(`video.${title}.title`) || title}
    cover={cover}
  />
)


Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.bool
}

export default Video;