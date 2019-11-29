import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/image';
import theme from 'themes';


const transparency = 0.25;
const delay = 500;

const StyledButton = styled.div`
  transition: all ${delay / 1000}s ease-out;
  opacity: ${props => props.down ? transparency : 1};
  cursor: pointer;
  border-radius: 2em;
  overflow: hidden;
  padding: 0.4em 0.8em;
  background-color: ${props => props.color};
  display: inline-block;
  font-family: ${theme.font.button};
  color: inherit;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 3px 20px 0 #0000003b;
  min-width: 7em;

  &:hover {
    transform: scale(1.2);
  }
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
    const { color = theme.color.color2, children = [] } = this.props;
    return <StyledButton color={color} down={this.state.isMouseDown} onMouseDown={this.onMouseDown} {...this.props}>
      {children}
    </StyledButton>
  }
}

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
}

export default Button;