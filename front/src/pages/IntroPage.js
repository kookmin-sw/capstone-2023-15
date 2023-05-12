import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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
                {/* <MainIntro></MainIntro> */}
                <Text>
                Find Fake nFt is a powerful tool to prevent AI-powered NFT theft incidents.
                <br/>We will protect the value of your valuable content assets.
                </Text>
            </MainContainer>
            <ValueIntro></ValueIntro>
            <ProcessIntro></ProcessIntro>
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

const Test = styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`



export default IntroPage;