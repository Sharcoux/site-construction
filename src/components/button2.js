import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/image';
import { BUTTON_FONT } from 'themes';

const transparency = 0.25;
const delay = 200;

const StyledButton = styled.div`
  border-radius: 2em;
  color: #333;
  background: #fff;
  box-shadow: 0 3px 20px 0 #0000003b;
  transition: all ${delay / 1000}s;
  opacity: ${props => props.down ? transparency : 1};
  cursor: pointer;
  overflow: hidden;
  padding: 0.5em 1em;
  background-color: white;
  display: inline-block;
  font-family: ${BUTTON_FONT};
  color: black;
  text-align: center;
`;

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.minOpacity = 0.25;
    this.maxOpacity = 1;
    this.fadeOutDelay = 200;
    this.state = {
      isMouseDown : false,
    };
  }
  componentWillMount() {
    window.addEventListener('mouseup', this.onMouseUp);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
    window.removeEventListener('mouseup', this.onMouseUp);
  }
  onMouseDown() {
    this.setState({ isMouseDown : true });
  }
  onMouseUp() {
    this.timeout = setTimeout(() => {
      this.setState({ isMouseDown : false });
    }, this.fadeOutDelay);
  }

  render() {
    const { title, icon } = this.props;
    return <StyledButton down={this.state.isMouseDown} onMouseDown={this.onMouseDown} {...this.props}>
      {icon ? <Image src={icon} /> : null}
      {title ? <span>{title}</span> : null}
    </StyledButton>
  }
}

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
}

export default Button;