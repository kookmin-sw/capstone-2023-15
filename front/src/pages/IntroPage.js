import React from "react";
import styled from "styled-components";
import BG from '../statics/images/bg-color.png'
import TitleIntro from '../components/IntroComponent/TitleComponent'
import TitleWriterIntro from '../components/IntroComponent/TitleWriterComponent'
import ValueIntro from '../components/IntroComponent/ValueComponent'
import ProcessIntro from '../components/IntroComponent/ProcessComponent'



const IntroPage = () => {
	return (
        <IntroContainer>
            <MainContainer>
                <Title>
                    <TitleIntro />
                </Title>
                <Text>
                    <TitleWriterIntro />
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
	font-size: 6vw;
    margin: 0 auto;
	display: flex;
    text-align: center;
`

const Text = styled.div`
    font-size: 1vw;
    margin-top: 3vh;
`

export default IntroPage;