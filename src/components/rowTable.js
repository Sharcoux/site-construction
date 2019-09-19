import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Element = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${props => props.index>0 ? '0.5em' : 0};
  padding-right: ${props => props.key<props.count-1 ? '0.5em' : 0};
  @media (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: ${props => props.index>0 ? '0.5em' : 0};
    padding-bottom: ${props => props.index<props.count-1 ? '0.5em' : 0};
  }
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  flex: 1 1 0;
`;

const RowTable = props => (
  <Container {...props}>
    {props.children.map((child, index) => <Element key={index} index={index} count={props.children.length}>{child}</Element>)}
  </Container>
)

RowTable.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RowTable;