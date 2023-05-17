import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import BG from '../../statics/images/bg-purple.png'

const ProcessComponent = ({}) => {
    const [barPosition, setBarPosition] = useState(0);
    const [frevBarPosition, setFrevBarPosition] = useState(0);

    const handleClickProcess = (i) => {
        setFrevBarPosition(barPosition);
        setBarPosition(i*5.3);
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
        right: 21vw;
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
                    
                    <ReceiveContent>
                        <span style={{fontSize: '1.75vw'}}>
                            What if you want to request it now?
                        </span>
                        <ReceiveBtn onClick={()=>window.open('https://forms.gle/fzSeaSjjL8JidtdS6')}>
                            Here !
                        </ReceiveBtn>
                    </ReceiveContent>
                    
                    <SmallText>
                        <br/><br/>* All your information is secure and will be deleted immediately after detection.<br/>
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
                    
                    <span style={{fontSize: '2vw'}}>- We provide detection results.<br/>-</span>
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
                        <span>ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF&nbsp; &nbsp; &nbsp;</span>
                        <span>ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF&nbsp; &nbsp; &nbsp;</span>
                        <span>ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF&nbsp; &nbsp; &nbsp;</span>
                        <span>ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF&nbsp; &nbsp; &nbsp;</span>
                        <span>ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF&nbsp; &nbsp; &nbsp;</span>
                        <span>ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF &nbsp; &nbsp; &nbsp;ThreeF&nbsp; &nbsp; &nbsp;</span>
                    </MarqueeText>
                </MarqueeContent>
                <MarqueeContent2>
                    <MarqueeText>
                        <span>Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp; </span>
                        <span>Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp; </span>
                        <span>Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp; </span>
                        <span>Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp; </span>
                        <span>Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp; </span>
                        <span>Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp;Find Fake nFt &nbsp; &nbsp; &nbsp; </span>
                    </MarqueeText>
                </MarqueeContent2>
            </BottomContainer>
        </Container>
	);
}


const Container = styled.div`
	font-family: AkiraExpanded;
	height: 100vh;
	background: url(${BG});
	display: flex;
    flex-direction: column;
    z-index: 100;
    position: relative;
    overflow: hidden;
`

const TopContainer = styled.div`
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
`

const BottomContainer = styled.div`
    height: 50vh;
`

const Title = styled.div`
    font-size: 5.5vw;
`

const ProcessContainer = styled.div`
    height: 15vw;
    border: 0.3em solid black;
    border-radius: 3vw;
    margin-left: 3vw;
    padding: 3vw;
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

const ReceiveContent = styled.div`
    display: flex;
`

const ReceiveBtn = styled.button`
    margin-left: 2vw;
    padding: 0vw 0.8vw;
    border: 0.2vw solid white;
    border-radius: 3vw;
    font-family: AkiraExpanded;
    background: #8186d3;
    color: white;
    cursor: pointer;
    transition: all 1s ease-in;
    &:hover {
        transition: all 1s ease-in;
        background: linear-gradient(to left, #858bd5, #a6b0e7);
    }
`

const SmallText = styled.p`
    font-size: 0.5vw;
`

const PointBox = styled.span`
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
    bottom: 45vh;
    position: absolute;
    padding: 3vw 0;
    box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.15), 0 0.5vw 0.5vw rgba(0,0,0,0.05);
    z-index: -1;
    opacity: 30%;
    transform: rotate(-10deg);
    left: -10%;
    width: 112vw;
`

const MarqueeContent2 = styled.div`
    background: #aeb9f4;
    color: white;
    bottom: 35vh;
    position: absolute;
    padding: 3vw 0;
    transform: rotate(10deg);
    box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.15), 0 0.5vw 0.5vw rgba(0,0,0,0.05);
    z-index: -1;
    opacity: 30%;
    width: 112vw;
    left: -10%;
`

const marquee = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
`

const MarqueeText = styled.span`
	animation: ${marquee} 50s linear infinite;
	white-space: nowrap;
	will-change: transform;
	display: inline-block;
    font-size: 1.3vw;
`


export default ProcessComponent;