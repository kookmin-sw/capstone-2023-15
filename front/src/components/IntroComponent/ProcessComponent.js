import React, { useState } from 'react';
import styled from 'styled-components';

const ProcessComponent = () => {
    const [barPosition, setBarPosition] = useState(0);

    const handleClickProcess = (i) => {
        setBarPosition(i*7.8);
        console.log(i, barPosition)
    }

    const ProcessBar = styled.div`
        position: absolute;
        border: 0.15vw solid rgba( 255, 255, 255, 0.18 );
        border-radius: 4vw;
        box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
        width: 43vw;
        height: 7.3vw;
        right: 6.5vw;
        transform: translateY(${barPosition}vw);
        transition: transform 1s;
        &:hover {
            transform: translateX(${barPosition}vw)
        }
    `

	return (
        <Container>
            <TopContainer>
                <Title>
                    Pro-<br/>gress
                </Title>
                <ProcessContainer>
                    <ProcessBar />
                    <ProcessContent onClick={()=>handleClickProcess(0)}>Reception</ProcessContent>
                    <ProcessContent onClick={()=>handleClickProcess(1)}>Detection</ProcessContent>
                    <ProcessContent onClick={()=>handleClickProcess(2)}>Result</ProcessContent>
                </ProcessContainer>
            </TopContainer>
            <BottomContainer>

            </BottomContainer>
        </Container>
	);
}

const Container = styled.div`
	font-family: AkiraExpanded;
    width: 100vw;
	height: 100vh;
	background: #e3e3e3;
	display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    flex-direction: column;
`

const TopContainer = styled.div`
    display: flex;
    margin: 10vh 8vw 10vh 8vw;

`

const Title = styled.div`
    font-size: 8vw;
    margin-top: 6vw;
`

const ProcessContainer = styled.div`
    width: 100vw;
    border: 0.3em solid black;
    border-radius: 4vw;
    margin-left: 3vw;
    padding: 3vw;
`

const ProcessContent = styled.div`
    font-size: 5vw;
    padding: 1vw;
    cursor: pointer;
`

// const ProcessBar = styled.div`
//     position: absolute;
//     border: 0.15vw solid rgba( 255, 255, 255, 0.18 );
//     border-radius: 4vw;
//     box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.25), 0 0.5vw 0.5vw rgba(0,0,0,0.15);
//     width: 43vw;
//     height: 7.3vw;
//     right: 6.5vw;
//     // transform: translateY(${barPosition});
//     transition: transform 0.5s ease;
// `

const BottomContainer = styled.div`
    margin: 10vh 8vw 10vh 8vw;

`

export default ProcessComponent;