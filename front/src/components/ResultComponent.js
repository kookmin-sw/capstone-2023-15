import React from 'react';
import styled from 'styled-components';

/*
const sampleJson = {
  clientName : "AMERICAN MONKEY",
  sequece:1,
  requestStatus: "DONE",
  requestResult:"safe",
  numberOfImagesScanned:3258,
  numberOfMaliciousImages:0
}
*/

const ResultComponent = ({props}) => {
	return (
		<ComponentRoot>
			<Section>
				<Cell width={"20%"} fontSize={"medium"} >CLIENT</Cell>
				<Cell width={"65%"} fontSize={"large"} >{props.clientName}</Cell>
				<Cell width={"15%"} fontSize={"large"} isEnd={true}>#{props.sequence}</Cell>
			</Section>
			<Section>
				<Cell width={"20.1%"} fontSize={"medium"}>REQUEST<br />STATUS</Cell>
				<Cell width={"35%"} fontSize={"large"} >{props.requestStatus}</Cell>
				<Cell width={"29.9%"} fontSize={"medium"} status={props.requestResult} statusCell={true}>REQUEST<br />RESULT</Cell>
				<Cell width={"15%"} isEnd={true}>
					{/* image cell */}
				</Cell>
			</Section>
			<Section>
				<Cell width={"55%"} fontSize={"medium"} >NUMBER OF IMAGES SCANNED</Cell>
				<Cell width={"45%"} fontSize={"large"} isEnd={true}>{props.numberOfImagesScanned}</Cell>
			</Section>
			<Section>
				<Cell width={"55%"} fontSize={"medium"}>NUMBER OF MALICIOUS IMAGES</Cell>
				<Cell width={"45%"} fontSize={"large"} status={props.requestResult} maliciousCell={true} isEnd={true}>{props.numberOfMaliciousImages}</Cell>
			</Section>
			<Section />
		</ComponentRoot>
	);
}

// 모든 컴포넌트의 폰트 사이즈가 동일한 규격이 아니기 때문에 해당 변수는 선언된 컴포넌트에서만 사용한다.
const fontSizeDict = {
	small:"1em",
	medium:"1.5em",
	large:"2em",
}

const colorDict = {
	safe:"#4BD37B",
	unsafe:"#FF0000",
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
`

const Cell = styled.div`
	background-color:${props => props.status && props.statusCell ? colorDict[props.status] : ""};
	display:flex;
  justify-content: center;
  align-items: center;
	border-right:${props => props.isEnd ? "" : "0.3vw solid"};
	width:${props => props.width};
	font-size:${props => fontSizeDict[props.fontSize]};
	color:${props => props.status && props.maliciousCell ? colorDict[props.status] : "" };
`

export default ResultComponent;