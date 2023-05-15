import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import BG from '../../statics/images/bg-purple.png'

const ProcessComponent = ({}) => {
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
                    <NumBox>1</NumBox><br/><br/>
                    Receive the service. <br/>
                    
                    What if you want to sign up now?
                    <SmallText>
                        * All your information is secure and will be deleted immediately after detection.<br/>
                    </SmallText>
                </BottomContent>
                :
                barPosition/5.3===1 ?
                <BottomContent>
                    <NumBox>2</NumBox><br/><br/>
                    Based on <PointBox>AI technology</PointBox>&nbsp;, 
                    <br/> we detect suspected scam-copycat NFTs.
                </BottomContent>
                :
                <BottomContent>
                    <NumBox>3</NumBox><br/><br/>
                    
                    <span style={{fontSize: '2.3vw'}}>- We provide detection results.<br/>-</span>
                    <span style={{fontSize: '2vw'}}> We request marketplaces to stop<br/> &nbsp;&nbsp;&nbsp;selling suspected scam nft cases.</span><br/>
                    <br/>
                    <SmallText>
                        * Our service provides 'suspected' cases of scam-copycat NFTs.<br/>
                        * The marketplace has all the power to decide on scam-copycat NFTs and stop sales.<br/>
                    </SmallText>
                    
                </BottomContent>
                }
                <MarqueeContent>
                    <MarqueeText>
                    ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        {/* * Our service provides 'suspected' cases of scam-copycat NFTs. &nbsp;
                        * The marketplace has all the power to decide on scam-copycat NFTs and stop sales. &nbsp;
                        * Our service provides 'suspected' cases of scam-copycat NFTs.&nbsp;
                        * The marketplace has all the power to decide on scam-copycat NFTs and stop sales. &nbsp; */}
                    </MarqueeText>
                </MarqueeContent>
                {/* <MarqueeContent>
                    <MarqueeText>
                    ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                    </MarqueeText>
                </MarqueeContent>
                <MarqueeContent2>
                    <MarqueeText2>
                        * Our service provides 'suspected' cases of scam-copycat NFTs. &nbsp;
                        * The marketplace has all the power to decide on scam-copycat NFTs and stop sales. &nbsp;
                        * Our service provides 'suspected' cases of scam-copycat NFTs.&nbsp;
                        * The marketplace has all the power to decide on scam-copycat NFTs and stop sales. &nbsp;

                    </MarqueeText2>
                </MarqueeContent2>
                <MarqueeContent3>
                    <MarqueeText>
                    ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                        ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF ThreeF&nbsp;
                    </MarqueeText>
                </MarqueeContent3> */}
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
    z-index: 100;
    position: relative;
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
    background: linear-gradient(to left, #858bd5, #a6b0e7);
    box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
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
    // border: 0.3vw solid black;
    background: white;
    border-radius: 10vw;
    padding: 0.2vw 1.5vw;
    font-style: italic;
`
const NumBox = styled.span`
    background: white;
    border-radius: 100vw;
    padding: 0.8vw 1vw;
    font-size: 1.8vw;
`

const MarqueeContent = styled.div`
    background: #8186d3;
    color: white;
    bottom: 60vh;
    position: absolute;
    padding: 3vw 0;
    // box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
    z-index: -1;
    opacity: 50%;
    transform: rotate(-10deg);
`
const MarqueeContent2 = styled.div`
    background: white;
    color: black;
    bottom: -195vh;
    position: absolute;
    padding: 1vw 0;
    transform: rotate(-3deg);
    box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
`
const MarqueeContent3 = styled.div`
    background: #8186d3;
    color: white;
    bottom: -210vh;
    position: absolute;
    padding: 1vw 0;
    transform: rotate(3deg);
    box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
`

const marquee = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
`

const MarqueeText = styled.span`
	animation: ${marquee} 40s linear infinite;
	white-space: nowrap;
	will-change: transform;
	display: inline-block;
`

const marquee2 = keyframes`
	0% { transform: translateX(-100%); }
	100% { transform: translateX(0); }
`

const MarqueeText2 = styled.span`
	animation: ${marquee2} 20s linear infinite;
	white-space: nowrap;
	will-change: transform;
	display: inline-block;
`

export default ProcessComponent;