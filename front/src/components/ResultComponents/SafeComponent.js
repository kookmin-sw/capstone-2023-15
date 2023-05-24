import React from 'react';
import styled from 'styled-components';
import SafetyIcon from '../../statics/images/icon-safety.png';

const SafeComponent = ({props}) => {
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
				<Cell className='status' width={'29.9%'} fontSize={'medium'} statusCell={true}>REQUEST<br />RESULT</Cell>
				<Cell width={'15%'} isEnd={true}>
					<ResultIcon src={SafetyIcon} />
				</Cell>
			</Section>
			<Section>
				<Cell width={'55%'} fontSize={'medium'} >NUMBER OF IMAGES SCANNED</Cell>
				<Cell width={'45%'} fontSize={'large'} isEnd={true}>{props.target_images_cnt}</Cell>
			</Section>
			<Section>
				<Cell width={'55%'} fontSize={'medium'}>NUMBER OF MALICIOUS IMAGES</Cell>
				<Cell className='malicious' width={'45%'} fontSize={'large'} isEnd={true}>0</Cell>
      </Section>
      <Section>
        <SafeString>
          <span>YOUR NFT WORK IS</span>
          <span style={{ color: '#4BD37B' }}>&nbsp; SAFE !</span>
        </SafeString>
      </Section>
		</ComponentRoot>
	);
}

// 모든 컴포넌트의 폰트 사이즈가 동일한 규격이 아니기 때문에 해당 변수는 선언된 컴포넌트에서만 사용한다.
const fontSizeDict = {
	small:'1em',
	medium:'1.2em',
	large:'2.5em',
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

const Cell = styled.div`
	&.malicious{
		color: #4BD37B;
	};
	&.status{
		color: white;
		background-color:#4BD37B;
	}
	display:flex;
	justify-content: center;
	align-items: center;
	border-right:${props => props.isEnd ? '' : '0.3vw solid black'};
	width:${props => props.width};
	font-size:${props => fontSizeDict[props.fontSize]};
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

export default SafeComponent;