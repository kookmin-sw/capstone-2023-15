import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainCaseComponent from '../components/MainComponents/MainCaseComponent';
import BG from '../statics/images/bg-blue.png'
import CaseBoxImg from '../statics/images/main-case.png'
import CaseBoxImg_ from '../statics/images/main-case-bline.png'
import BTitleImg from '../statics/images/main-btitle.png'



const MainPage = () => {
	const navigate = useNavigate();
	const caseArr = [1, 2, 3, 4, 5, 6];
	return (
		<MainPageContainer>
			<MainTop>
				<MainText>
					<Title>F.F.F</Title>
					<SubTitle>
						Don't let cybercriminals steal your<br/> 
						NFTs - safeguard & digital assets<br/>  
						with the power of AI security.
					</SubTitle>
					<ContactBtn>Let's Protect! ►</ContactBtn>
				</MainText>
			</MainTop>
			<MainBottom>
				<BottomTitle>
					<BottomTitleSection>
						<BottomTitleTextSection>
							<span>📌 List of <TextStroke>plagiarized</TextStroke> works we found !   &nbsp;&nbsp;</span>
							<span><BottomTitleImgSection src={BTitleImg} /></span>
							<span>&nbsp;&nbsp; Three F &nbsp;-&nbsp; <TextStroke>FIND FAKE NFT</TextStroke></span>
						</BottomTitleTextSection>
					</BottomTitleSection>
					
				</BottomTitle>

				<BottomCaseContainer>

					<BoxToCase onClick={()=>navigate('/cases')}>
						<BoxToCaseImg>
							<BoxtoCaseText>CASE</BoxtoCaseText>
							<BoxToCaseBtn>+</BoxToCaseBtn>
						</BoxToCaseImg>
					</BoxToCase>

					<MainCaseContainer>
					{caseArr.map((i) => (
						<MainCaseComponent i={i} />
					))}
					</MainCaseContainer>

				</BottomCaseContainer>
			</MainBottom>
		</MainPageContainer>
	);
}

const MainPageContainer = styled.div`
	font-family: AkiraExpanded;

`

const MainTop = styled.div`
	width: 100vw;
	height: 100vh;

	background: url(${BG});
`

const MainText = styled.div`
	padding: 15% 0% 0% 10%;
	width: 50%;
`

const Title = styled.span`
	font-size: 8em;
	// width: 85%;
	background: linear-gradient(to right, #003cb8, #217bcc, #2fade4);
	color: transparent;
	-webkit-background-clip: text;
`

const SubTitle = styled.div`

	margin: -1.5% 0% 3% 0%;
`

const ContactBtn = styled.button`
	font-family: AkiraExpanded;
	font-size: 1.1em;
	padding: 2%;
	background: linear-gradient(to right, #71b4f6, #62d9fa);
	border-radius: 20px;
	border: 2.5px solid black;
`



// Bottom Frame
const MainBottom = styled.div`
	width: 100vw;
	height: 100vh;
	background: #016DD8;
	margin: 0 auto;
    justify-content: space-between;
`

// animation 추후 수정 예정
const BottomTitle = styled.div`
	height: 8vh;
	background: black;
	padding: 1% 0% 1% 0%;
	display: flex;
`
const marquee = keyframes`
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(-100%, 0);
	}
`
const BottomTitleSection = styled.marquee`
	font-size: 4em;
	height: 100%;
	width: 100%;
	behavior: scroll;
	display: flex;

`

const BottomTitleTextSection = styled.div`
	color: white;
	animation: ${marquee} 30s linear infinite;
	white-space: nowrap;
	will-change: transform;
	position: absolute;
`

const TextStroke = styled.span`
	-webkit-text-stroke: 0.04em white;
	color: black;

`

const BottomTitleImgSection = styled.img`
	width: 4.5%;
`

const BottomCaseContainer = styled.div`
	margin: 5%;
	height: 70%;
	background: white;
	border: 0.3em solid #000000;
	display: flex;
`
const BoxToCase = styled.div`
	width: 25%;
	height: 100%;
	position: relative;
	color: white;
	border-right: 0.3em solid black;
`

const BoxToCaseImg = styled.div`
	background: url(${CaseBoxImg_});
	height: 100%;
	width: 100%;
	background-size: cover; 
	&:hover{
		background: url(${CaseBoxImg});
		background-size: cover; 
        transition: 0.5s;
	}
`

const BoxtoCaseText = styled.div`
	transform: rotate(-90deg) ;
	font-size: 7em;
	transform-origin: right top;
	position: absolute;
    top: 5%;
	right: 100%;
`

const BoxToCaseBtn = styled.div`
	// width: 100%;
	// height: 100%;
	position: absolute;
	font-size: 3.5em;
	top: 3%;
	right: 5%;
	text-align: right;
`

const MainCaseContainer = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 0.3em solid black;

`
export default MainPage;

