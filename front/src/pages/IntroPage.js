import React from "react";
import styled from "styled-components";
import BG from '../statics/images/bg-color.png'
import TitleIntro from '../components/IntroComponent/TitleComponent'
import ValueIntro from '../components/IntroComponent/ValueComponent'
import ProcessIntro from '../components/IntroComponent/ProcessComponent'



const IntroPage = () => {
	return (
        <IntroContainer>
            <MainContainer>
                <Title>
                    Three F
                </Title>
                <Text>
                Find Fake nFt is a powerful tool to prevent AI-powered NFT theft incidents.
                <br/>We will protect the value of your valuable content assets.
                </Text>
            </MainContainer>
            <ValueIntro />
            <ProcessIntro />
        </IntroContainer>
	);
}

const IntroContainer = styled.div`
    font-family: AkiraExpanded;
`


const MainContainer = styled.div`
	height: 100vh;
	background: url(${BG});
	background-size: cover;
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

const Text = styled.div`
    font-size: 1vw;
    margin-top: 3vh;
`

export default IntroPage;