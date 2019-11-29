import React from 'react';
import styled from 'styled-components';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
    background: ${theme.color.color5};
    text-align: center;
    padding: 1.5em;
`;

const Text = styled.span`
    padding: 0 0.5em;
`;

const Education = () => (
    <Container>
        <Text>{lang.t('education.question')}</Text>
        <a href="#">{lang.t('education.action')}</a>
    </Container>
);

export default Education;