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
  ${props => props.fixed ? "background-attachment: fixed;" : ""}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Child = styled.div`
  max-width: 40%;
  padding: 2em;
`;

// const StyledImage = styled.img`
//   position: absolute;
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// `;

const Page = ({background, color, fixed, children = [], ...props}) => (
  <StyledPage color={color} url={background} fixed={fixed}>
    {children.map(child => (<Child>{child}</Child>))}
  </StyledPage>
)


Page.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  fixed: PropTypes.bool,
}

export default Page;