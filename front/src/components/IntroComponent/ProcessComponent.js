import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import BG from '../../statics/images/bg-purple.png'

const ProcessComponent = () => {
    const [barPosition, setBarPosition] = useState(0);
    const [frevBarPosition, setFrevBarPosition] = useState(0);

    const handleClickProcess = (i) => {
        setFrevBarPosition(barPosition);
        setBarPosition(i*5.3);
        // console.log(i, barPosition)
    }

    const barAnim = keyframes`
        0%{
            transform: translateY(${frevBarPosition}vw);
        }
        100%{
            transform: translateY(${barPosition}vw);
        }
    `

    const ProcessBar = styled.div`
        position: absolute;
        border: 0.15vw solid rgba( 255, 255, 255, 0.13);
        border-radius: 4vw;
        box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
        width: 34vw;
        height: 4.8vw;
        right: 20.5vw;
        margin-top: -0.3vw;
        transition: transform 1s;
        animation: ${barAnim} 1s forwards;
    `

	return (
        <Container>
            <TopContainer>
                <Title>
                    Pro-<br/>cess
                </Title>
                <ProcessContainer>
                    <ProcessBar onMouseOver={()=>setFrevBarPosition(barPosition)} />
                    <ProcessContent onClick={()=>handleClickProcess(0)}>Reception</ProcessContent>
                    <ProcessContent onClick={()=>handleClickProcess(1)}>Detection</ProcessContent>
                    <ProcessContent onClick={()=>handleClickProcess(2)}>Result</ProcessContent>
                </ProcessContainer>
            </TopContainer>
            <BottomContainer>
                {
                barPosition===0 ?
                <BottomContent>
                    Receive the service. <br/>
                    All your information is secure and will be deleted immediately after detection.<br/>
                    What if you want to sign up now?
                </BottomContent>
                :
                barPosition/5.3===1 ?
                <BottomContent>
                    Based on <PointBox>AI technology</PointBox>, <br/> we detect suspected scam-copycat NFTs.
                </BottomContent>
                :
                <BottomContent>
                    We provide detection results.<br/>
                    We request marketplaces to stop selling suspected stolen cases.<br/><br/>
                    <SmallText>
                        * Our service provides 'suspected' cases of scam-copycat NFTs.<br/>
                        * The marketplace has all the power to decide on scam-copycat NFTs and stop sales.<br/>
                    </SmallText>

                </BottomContent>
                }
            </BottomContainer>
        </Container>
	);
}

const Container = styled.div`
	font-family: AkiraExpanded;
	height: 100vh;
	// background: #e3e3e3;
	background: url(${BG});
	display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    flex-direction: column;
`

const TopContainer = styled.div`
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
    // text-align: center;
`

const BottomContainer = styled.div`
    height: 50vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
`

const Title = styled.div`
    font-size: 5.5vw;
`

const ProcessContainer = styled.div`
    // width: 100vw;
    height: 15vw;
    border: 0.3em solid black;
    border-radius: 3vw;
    margin-left: 3vw;
    padding: 3vw;
    // margin-top: 1vw;
`

const ProcessContent = styled.div`
    font-size: 4vw;
    padding-bottom: 0.7vw;
    cursor: pointer;
`

const BottomContent = styled.div`
    font-size: 2.7vw;
    padding: 0 20vw 0 20vw;
`

const SmallText = styled.p`
    font-size: 0.5vw;
`

const PointBox = styled.span`
    border: 0.3vw solid black;
    border-radius: 10vw;
    padding: 0.2vw 1vw;
    font-style: italic;
`

export default ProcessComponent;