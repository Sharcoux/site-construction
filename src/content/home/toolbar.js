import React from 'react';
import styled from 'styled-components';
import Image from '../../components/image';
import lang from '../../languages';
import theme from '../../themes';

const Container = styled.div`
    background: linear-gradient(#108a93, #31aca8);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8em;
    padding: 0.5em 10%;
`;

const Part = styled.div`
`;

const Langue = styled.span`
    text-transform: uppercase;
`;

const Access = styled.div`

`;

const Login = () => (<Access>
    {lang.t('toolbar.login')}
</Access>);

const Name = styled.div`
    text-transform: uppercase;
`;

const Account = ({user}) => (<div>
    <Name>{user.firstname} {user.lastname}</Name>
    <Access>{lang.t('toolbar.account')}</Access>
</div>)

const Border = styled.div`
    background: linear-gradient(to right, #fff14c, #e43b37);
    height: 0.3em;
`;

const Toolbar = ({user}) => (
    <div>
        <Container>
            <Part>{lang.available.map(l => <Langue key={l}>{l}</Langue>)}</Part>
            <Part>
                {user ? <Account user={user} /> : <Login />}
            </Part>
        </Container>
        <Border />
    </div>
  );
  
export default Toolbar;