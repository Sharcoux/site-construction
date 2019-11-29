import React from 'react';
import styled from 'styled-components';
import Page from '../../components/page';
import Video from '../../components/video';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2em 0;
    flex-wrap: wrap;
`;

const Background = styled.div`
    background-color: ${theme.color.color1};
    position: absolute;
    width: 100%;
    height: 10em;
    top: 3em;
    z-index: -1;
`;

const Title = styled.h2`
  font-size: 2em;
  margin: 0;
  line-height: 1em;
  fond-weight: bold;
`;

const TitleContainer = styled.div`
    margin: 5em 4em 5em 0;
    flex: 1 0 10em;
    min-width: 10em;
    text-align: right;
`;

const Wrapper = styled.div`
    text-align: left;
    display: inline-block;
    width: 11em;
`;

const Subtitle = styled.h3`
  font-size: 1.2em;
  margin: 0;
  font-weight: normal;
`;

const VideoContainer = styled.div`
  margin: 0 4em 0 4em;
  flex: 1 0 10em;
  min-width: 14em;
  height: 16em;
  border: 1px solid black;
`;

const VideoPresentation = () => (
  <Container>
      <Background />
      <TitleContainer>
          <Wrapper>
            <Title>{lang.t('videoPresentation.title')}</Title>
            <Subtitle>{lang.t('videoPresentation.subtitle')}</Subtitle>
          </Wrapper>
      </TitleContainer>
      <VideoContainer>
        <Video title={"presentation"} />
      </VideoContainer>
  </Container>
);

export default VideoPresentation;