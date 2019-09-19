import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/image';
import { MAIN_COLOR, BUTTON_FONT } from 'themes';

const transparency = 0.25;
const delay = 200;

const StyledButton = styled.div`
  transition: all ${delay / 1000}s;
  opacity: ${props => props.down ? transparency : 1};
  cursor: pointer;
  border-radius: .3em;
  overflow: hidden;
  padding: 0.5em 1em;
  background-color: ${MAIN_COLOR};
  display: inline-block;
  border-color: rgba(0,0,0,0.2);
  border-bottom-color: rgba(0,0,0,0.4);
  box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);
  font-family: ${BUTTON_FONT};
  color: white;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0,0,0,0.5);
  font-weight: 400;
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