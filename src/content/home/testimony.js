import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Page from '../../components/page';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
  background: ${theme.color.color3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-top: 0;
  padding: 0;
  margin: 0.6em 0;
  text-align: center;
`;

const Slider = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: 2s all ease-in-out;
  left: -${props => props.index*100}%;
`;

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100vw;
  width: 30em;
`;

const Text = styled.article`
  margin-bottom: 2em;
`;
const Name = styled.header`
  color: ${theme.color.color4};
  font-weight: bold;
`;
const Role = styled.div`
  font-size: 0.8em;
`;

const DotContainer = styled.div``;

const Dot = styled.div`
  width: 0.6em;
  height: 0.6em;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid white;
  background: ${props => props.selected ? 'white' : 'none'};
  margin: 0 0.4em;
  cursor: pointer;
`;

const CardContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
`;

const Slide = ({testimony}) => (<CardContainer>
    <Text>{testimony.text}</Text>
    <Name>{testimony.name}</Name>
    <Role>{testimony.role}</Role>
</CardContainer>);

const Testimony = () => {
  const [index, setIndex] = useState(0);
  const testimonies = lang.t('testimony.t');
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i+1)%testimonies.length);//See https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval for explaination
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (<Container>
    <Title>{lang.t('testimony.title')}</Title>
    <DotContainer>{testimonies.map((_,i)=><Dot key={i} selected={i===index} onClick={() => setIndex(i)} />)}</DotContainer>
    <Wrapper>
      <Slider index={index}>
        {testimonies.map(t => <Slide key={t.name} testimony={t} />)}
      </Slider>
    </Wrapper>
  </Container>);
}

export default Testimony;