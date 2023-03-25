import React, { Component } from 'react';
import styled from 'styled-components';
import BG from '../statics/images/bg-blue.png'


const MainPage = () => {
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
	// width: 90%;
	padding: 15% 55% 0% 10%;
	
`

const Title = styled.div`
	font-size: 8em;
	background: linear-gradient(to right, #003cb8, #4cb9e9);
	color: transparent;
	-webkit-background-clip: text;
`
const SubTitle = styled.div`
	margin: 0% 0% 5% 0%;
`

const ContactBtn = styled.button`
	font-family: AkiraExpanded;
	font-size: 1.3em;
	padding: 3%;
	background: linear-gradient(to right, #0bbafb, #4285ec);
	border-radius: 25px;
	border: 3px solid black;
`


export default MainPage;

