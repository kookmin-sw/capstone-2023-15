import React from 'react';
import styled from 'styled-components';
import MaliciousBtnComponent from './MaliciousBtnComponent';
import DangerIcon from '../../statics/images/icon-danger-red.png';

const DangerComponent = ({props}) => {
	return (
		<ComponentRoot>
			<Section>
				<Cell width={'20%'} fontSize={'medium'} >CLIENT</Cell>
				<Cell width={'65%'} fontSize={'large'} >{props.collection_name}</Cell>
				<Cell width={'15%'} fontSize={'large'} isEnd={true}>#{props.sequence}</Cell>
			</Section>
			<Section>
				<Cell width={'20.1%'} fontSize={'medium'}>REQUEST<br />STATUS</Cell>
				<Cell width={'35%'} fontSize={'large'} >{props.status}</Cell>
				<Cell className='status' width={'29.9%'} fontSize={'medium'} >REQUEST<br />RESULT</Cell>
				<Cell width={'15%'} isEnd={true}>
					<ResultIcon src={DangerIcon} />
				</Cell>
			</Section>
			<Section>
				<Cell width={'55%'} fontSize={'medium'} >NUMBER OF IMAGES SCANNED</Cell>
				<Cell width={'45%'} fontSize={'large'} isEnd={true}>{props.target_images_cnt}</Cell>
			</Section>
			<Section>
				<Cell width={'55%'} fontSize={'medium'}>NUMBER OF MALICIOUS IMAGES</Cell>
				<Cell className='malicious' width={'45%'} fontSize={'large'} isEnd={true}>{props.number_of_malicious_images}</Cell>
			</Section>
			<Section>
        <MaliciousList>
          <MaliciousBtnComponent />
        </MaliciousList>
			</Section>
		</ComponentRoot>
	);
}

// 모든 컴포넌트의 폰트 사이즈가 동일한 규격이 아니기 때문에 해당 변수는 선언된 컴포넌트에서만 사용한다.
const fontSizeDict = {
	small:'1em',
	medium:'1.2em',
	large:'2em',
};

const ComponentRoot = styled.div`
	width: 60vw;
	height:60vh;
	display:flex;
	flex-direction: column;
	border-style: solid;
	border-width: 0.3vw 0.3vw 0 0.3vw;
`;

const Section = styled.div`
	border-bottom:0.3vw solid;
	flex:1;
	display:flex;
	background-color:white;
`

const Cell = styled.div`
	&.malicious{
		color: #FF0000;
	};
	&.status{
		color: white;
		background-color: #FF0000;
	}
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
	margin: 0 auto;
`

const ResultIcon = styled.img`
	src:${props => `url(${props.src})`};
	width:4em;
	height:4em;
`

export default DangerComponent;