import React from 'react';
import styled from 'styled-components';
import BG from '../statics/images/bg-color.png'



const IntroPage = () => {
	return (
		<MainContainer>
			<Title>
                Three F
            </Title>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	font-family: AkiraExpanded;
    width: 100vw;
	height: 100vh;
	background: url(${BG});
	display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`

const Title = styled.span`
	font-size: 3em;
    margin: 0 auto;
	display: flex;
    text-align: center;
`


export default IntroPage;