import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.color};
  position: relative;

  background-image: url(${props => props.url});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Page = ({background, color,...props}) => (
  <StyledPage color={color} url={background} />
)


Page.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
}

export default Page;