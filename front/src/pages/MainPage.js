import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainCaseComponent from '../components/MainComponents/MainCaseComponent';
import BG from '../statics/images/bg-blue.png'
import NftCards from '../statics/images/nftcard.png'
import CaseBoxImg from '../statics/images/main-case.png'
import CaseBoxImg_ from '../statics/images/main-case-bline.png'
import BTitleImg from '../statics/images/main-btitle.png'
import { dynamoDB, get_latest_params } from '../db.js';


const MainPage = () => {
	const navigate = useNavigate();
	const [cases, setCases] = useState([]);

	const params = get_latest_params;
	useEffect(() => {
		  dynamoDB.scan(params, function(err, data) {
			if (err) {
			  console.log(err);
			} else {
			  const items = data.Items
			  .map(({ thumbnail_image, collection_name, malicious_images }) => ({
				thumbnail_image,
				collection_name,
				scam_length: Math.floor(malicious_images.slice(1, -1).split(',').length/2)
			  }))
			  // 최근 데이터 6개만 출력
			  setCases(items.slice(0,6)); 
			}  
		  });
	}, [params]);

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
				<MainImg>
					<MainImgSection src={NftCards} />
				</MainImg>
			</MainTop>
			<MainBottom>
				<BottomTitle>
					<BottomTitleSection>
						<BottomTitleTextSection>
							<MarqueeText>
								📌 Case of detecting the existence of <TextStroke>suspected scam nft</TextStroke>&nbsp;&nbsp;
								<BottomTitleImgSection src={BTitleImg} />
								&nbsp;&nbsp; Three F &nbsp;-&nbsp; <TextStroke>FIND FAKE NFT&nbsp;&nbsp;</TextStroke>
							</MarqueeText>
							<MarqueeText>
								📌 Case of detecting the existence of <TextStroke>suspected scam nft</TextStroke>&nbsp;&nbsp;
								<BottomTitleImgSection src={BTitleImg} />
								&nbsp;&nbsp; Three F &nbsp;-&nbsp; <TextStroke>FIND FAKE NFT&nbsp;&nbsp;</TextStroke>
							</MarqueeText>
						</BottomTitleTextSection>
					</BottomTitleSection>
				</BottomTitle>
				<BottomCaseContainer>
					<BoxToCase onClick={()=>navigate('/cases')}>
						<BoxToCaseImg>
							<BoxToCaseText>MORE</BoxToCaseText>
							<BoxToCaseBtn>+</BoxToCaseBtn>
						</BoxToCaseImg>
					</BoxToCase>

					<MainCaseContainer>
					{cases.map((c, i) => (
						<MainCaseComponent index={i} props={c}/>
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
	display: flex;
`

const MainText = styled.div`
	padding: 15% 0% 0% 10%;
	width: 50%;
`

const Title = styled.span`
	font-size: 9vw;
	background: linear-gradient(to right, #003cb8, #217bcc, #2fade4);
	color: transparent;
	-webkit-background-clip: text;
`

const SubTitle = styled.div`
	font-size: 1.05vw;
	margin: -1.5% 0% 5% 0%;
`

const ContactBtn = styled.button`
	font-family: AkiraExpanded;
	font-size: 1.1vw;
	padding: 2vh 2vw 2vh 2vw;
	background: linear-gradient(to right, #71b4f6, #62d9fa);
	border-radius: 2vw;
	border: 0.2em solid black;
`

const MainImg = styled.div`
	margin: 15vh 7vw 0vh 5vw;
`

const MainImgSection = styled.img`
	width: 40vw;
`

// Bottom Frame
const MainBottom = styled.div`
	width: 100%;
	height: 100vh;
	background: #016DD8;
	margin: 0 auto;
    justify-content: space-between;
`

const BottomTitle = styled.div`
	max-height: 15vh;
	background: black;
	display: flex;
`

const marquee = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(-100%); }
`

const BottomTitleSection = styled.div`
	font-size: 7vh;
	height: 11vh;
	display: flex;
	align-items: center;
	overflow: hidden
`

const BottomTitleTextSection = styled.div`
	color: white;
	overflow: hidden;
	white-space: nowrap;
	display: flex;
	align-items: center;
`

const MarqueeText = styled.span`
	animation: ${marquee} 30s linear infinite;
	white-space: nowrap;
	will-change: transform;
	display: inline-block;
`

const TextStroke = styled.span`
	-webkit-text-stroke: 0.03em white;
	color: black;
`

const BottomTitleImgSection = styled.img`
	height: 5vh;
	
`

const BottomCaseContainer = styled.div`
	margin: 8.5vh 15vw 8.5vh 15vw;
	height: 70vh;
	background: white;
	border: 0.3em solid #000000;
	display: flex;
	align-items: center;
    justify-content: center;
	text-align: center;
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

const BoxToCaseText = styled.span`
	transform: rotate(-90deg);
	font-size: 7vw;
	transform-origin: right top;
	position: absolute;
    top: 5%;
	right: 100%;
`

const BoxToCaseBtn = styled.div`
	position: absolute;
	font-size: 3.5vw;
	margin-top: 2.45vh;
	margin-left: 13vw;
`

const BoxToCase = styled.div`
	width: 25%;
	height: 100%;
	position: relative;
	color: white;
	border-right: 0.3em solid black;
	&:hover ${BoxToCaseImg} ${BoxToCaseBtn} {
		transform: rotate(360deg);
        transition: 0.5s;
	}
	${BoxToCaseImg}:not(:hover) ${BoxToCaseBtn} {
        transform: rotate(0deg);
        transition: 0.5s;
    }
`

const MainCaseContainer = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 0.3em solid black;

`
export default MainPage;

