import React from 'react';
import styled from 'styled-components';
import BG from '../../statics/images/bg-char.png'
import GenImg from '../../statics/images/gen-img.png'

const ValueComponent = () => {
	return (
		<ValueContainer>
				<ValueBox>
					<ValueContent>
						<Title>
							SERVICE VALUE 
						</Title>
						<Content1>
							Our service supports the copyright value of NFTs.
						</Content1>
						<Content2>
							We pursue public interest by sharing suspected cases of scam-copycat NFTs<br/>
							and promote the development of a clean NFT market.
						</Content2>
						<Content3>
							Clean NFT Martket - !
						</Content3>
					</ValueContent>
				</ValueBox>
		</ValueContainer>
	);
}

const ValueContainer = styled.div`
	height: 100vh;
	background: url(${BG});
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
    justify-content: center;
    align-items: center;
`

const ValueBox = styled.div`
	background: white;
	height: 43vh;
	padding 2vw 2vw;
	background-repeat: no-repeat;
	background-size: 75%;
	background-position: center;
`

const ValueContent = styled.div`
	background: pink;
	height: 43vh;
	padding 0 2vw;
	background: url(${GenImg});
	background-repeat: no-repeat;
	background-size: 75%;
	background-position: center;
	overflow: auto;
`

const Title = styled.div`
	color: #3664f3;
	font-size: 7vw;
`

const Content1 = styled.div`
	font-size: 1.85vw;
`

const Content2 = styled.div`
	font-size: 1.21vw;
	padding-top: 1vw;
`

const Content3 = styled.div`
	font-size: 4.38vw;
	padding-top: 2vw;
`


export default ValueComponent;