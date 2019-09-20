import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/image';
import Text from 'components/text';
import Button from 'components/button';
import theme from 'themes';

const Layer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: .3em;
  overflow: hidden;
  padding: 1em;
  background-color: ${theme.color.whiteBackground};
  border-color: rgba(0,0,0,0.2);
  border-bottom-color: rgba(0,0,0,0.4);
  box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9), 2px 2px 2px rgba(0, 0, 0, 0.4);
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 60%;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  &:before {
    padding-top: 100%;
    display: block;
    content: "";
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
  }
`;

const TextCard = styled(Text)`
  font-weight: bold;
  text-shadow: 0 1px 0 rgba(0,0,0,0.5);
  padding: 1em 0;
`;

const Card = ({text, image, button}) => (
  <Layer>
    <ImageContainer>
      <Image src={image} alt="" />
    </ImageContainer>
    <TextCard>{text}</TextCard>
    <Button title={button} />
  </Layer>
)

Card.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
}

export default Card;