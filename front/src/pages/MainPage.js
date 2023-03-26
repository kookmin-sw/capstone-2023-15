import React, { Component } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainCaseComponent from '../components/MainComponents/MainCaseComponent';
import BG from '../statics/images/bg-blue.png'
import CaseBoxImg from '../statics/images/main-case.png'
import CaseBoxImg_ from '../statics/images/main-case-bline.png'



const MainPage = () => {
	const navigate = useNavigate();
	const caseArr = [1, 2, 3, 4, 5, 6];
	return (
		<Main>
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
				<BottomTitle>HI</BottomTitle>
				<BottomContainer>
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
						{/* <MCaseComponent></MCaseComponent> */}
					</MainCaseContainer>
				</BottomContainer>
			</MainBottom>
		</Main>
	);
}

const Main = styled.div`
	font-family: AkiraExpanded;

`

const MainTop = styled.div`
	width: 100vw;
	height: 100vh;

	background: url(${BG});
`

const MainText = styled.div`
	padding: 15% 0% 0% 10%;
`

const Title = styled.div`
	max-width: 30vw;
	font-size: 8em;
	background: linear-gradient(to right top, #003cb8, #4cb9e9);
	color: transparent;
	-webkit-background-clip: text;
`

const SubTitle = styled.div`

	margin: -1.5% 0% 5% 0%;
`

const ContactBtn = styled.button`
	font-family: AkiraExpanded;
	font-size: 1.1em;
	padding: 1.5%;
	background: linear-gradient(to right, #4285ec, #0bbafb);
	border-radius: 20px;
	border: 2.5px solid black;
`

const MainBottom = styled.div`
	width: 100vw;
	height: 100vh;

	background: #016DD8;
	margin: 0 auto;
    justify-content: space-between;
    align-items: center;
`

const BottomTitle = styled.div`
	height: 15vh;
	background: black;
`
const BottomContainer = styled.div`
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

