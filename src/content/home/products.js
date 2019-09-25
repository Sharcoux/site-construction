import React from 'react';
import styled from 'styled-components';
import Page from '../../components/page';
import Video from '../../components/video';
import lang from '../../languages';
import theme from '../../themes';

const TitleContainer = styled.div`
  padding: 2em;
  width: 30em;
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  margin-bottom: 0.8em;
  text-transform : uppercase;
`;

const Subtitle = styled.h1`
  font-size: 1.5em;
  text-transform : uppercase;
  margin: 0;
  color: ${theme.color.color7};
`;

const VideoContainer = styled.div`
  margin: 2em;
  width: 30em;
  border: 1px solid black;
`;

const Products = () => (
  <Page color={theme.color.color5}>
      <TitleContainer>
        <Title>{lang.t('products.title')}</Title>
        <Subtitle>{lang.t('products.subtitle')}</Subtitle>
      </TitleContainer>
      <VideoContainer>
        <Video title={"presentation"} />
      </VideoContainer>
  </Page>
);

export default Products;