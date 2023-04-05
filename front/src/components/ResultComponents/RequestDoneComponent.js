import React from 'react';
import styled from 'styled-components';
import MaliciousComponent from './MaliciousComponent';
import DangerIcon from '../../statics/images/icon-danger-red.png';
import SafetyIcon from '../../statics/images/icon-safety.png';

const ResultComponent = ({props}) => {
	return (
		<ComponentRoot>
			<Section>
				<Cell width={'20%'} fontSize={'medium'} >CLIENT</Cell>
				<Cell width={'65%'} fontSize={'large'} >{props.clientName}</Cell>
				<Cell width={'15%'} fontSize={'large'} isEnd={true}>#{props.sequence}</Cell>
			</Section>
			<Section>
				<Cell width={'20.1%'} fontSize={'medium'}>REQUEST<br />STATUS</Cell>
				<Cell width={'35%'} fontSize={'large'} >{props.requestStatus}</Cell>
				<Cell width={'29.9%'} fontSize={'medium'} status={props.requestResult} statusCell={true}>REQUEST<br />RESULT</Cell>
				<Cell width={'15%'} isEnd={true}>
					<ResultIcon src={props.requestResult === 'safe' ? SafetyIcon : DangerIcon} />
				</Cell>
			</Section>
			<Section>
				<Cell width={'55%'} fontSize={'medium'} >NUMBER OF IMAGES SCANNED</Cell>
				<Cell width={'45%'} fontSize={'large'} isEnd={true}>{props.numberOfImagesScanned}</Cell>
			</Section>
			<Section>
				<Cell width={'55%'} fontSize={'medium'}>NUMBER OF MALICIOUS IMAGES</Cell>
				<Cell width={'45%'} fontSize={'large'} status={props.requestResult} maliciousCell={true} isEnd={true}>{props.numberOfMaliciousImages}</Cell>
			</Section>
			<Section>
				{
					props.requestResult === 'safe' ?
						<SafeString>
							<span>YOUR NFT WORK IS</span>
							<span style={{color:colorDict['safe']}}>&nbsp; SAFE !</span>
						</SafeString>
						:
						<MaliciousList>
							<MaliciousComponent />
							<MaliciousComponent />
						</MaliciousList>
				}
			</Section>
		</ComponentRoot>
	);
}

// 모든 컴포넌트의 폰트 사이즈가 동일한 규격이 아니기 때문에 해당 변수는 선언된 컴포넌트에서만 사용한다.
const fontSizeDict = {
	small:'1em',
	medium:'1.2em',
	large:'2em',
}

const colorDict = {
	safe:'#4BD37B',
	danger:'#FF0000',
}

const ComponentRoot = styled.div`
	width: 60vw;
	height:60vh;
	display:flex;
	flex-direction: column;
	border-style: solid;
  border-width: 0.3vw 0.3vw 0 0.3vw;
`

const Section = styled.div`
	border-bottom:0.3vw solid;
	flex:1;
	display:flex;
	background-color:white;
`

// color 가 두 개인 이유는 request Result의 컬러와 Number of malicious images 의 컬러를 한 컴포넌트로 처리하기 위해서 입니다. 
const Cell = styled.div`
	background-color:${props => props.status && props.statusCell ? colorDict[props.status] : ''};
	color:${props => props.status && props.maliciousCell ? colorDict[props.status] : '' };
	color:${props => props.status && props.statusCell ? 'white' : '' };
	display:flex;
  justify-content: center;
  align-items: center;
	border-right:${props => props.isEnd ? '' : '0.3vw solid black'};
	width:${props => props.width};
	font-size:${props => fontSizeDict[props.fontSize]};
`

const MaliciousList = styled.div`
	display:flex;
  flex-direction: column;
  justify-content: center;
`

const SafeString = styled.div`
	margin-left: 1em;
	display:flex;
	width:100%;
	justify-content: center;
	align-items: center;
	font-size:1.5em;
`

const ResultIcon = styled.img`
	src:${props => `url(${props.src})`};
	width:4em;
	height:4em;
`

export default ResultComponent;