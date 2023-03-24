import React, {useState} from 'react';
import styled from 'styled-components';
import FakeNftImg from '../../statics/images/FakeNftImg.png'
import OpenseaLogo from '../../statics/images/OpenseaLogo.png'

const CaseComponent = ({props}) => {
	// const [betweenMargin, setBetweenMargin] = useState(0)
	// if(props.isReverse){

	// }
	const tmp = "BBEARR";
	return (
		<CaseCard isReverse={props.isReverse}>
			<ImgSection src={FakeNftImg} />
			<MarginBox />
			<ContentSection>
				<div>
					<CollectionTitle>
						GREEN BEAR
						<MarketIcon src={OpenseaLogo} />
					</CollectionTitle>
					<CustomerInfo>AUTHOR NAME</CustomerInfo>
					<CustomerInfo>BEAR@GMAIL.COM</CustomerInfo>
				</div>
				<PlagiaristName>PLAGIARIST - {tmp}</PlagiaristName>
				
			</ContentSection>
			

		</CaseCard>
	);
}

const CaseCard = styled.div`
	font-family: AkiraExpanded;
	width: 94vw;
	height: 15vh;
	background-color:#ffffff;
	border: 0.3em solid #000000;
	padding: 1em;
	display:flex;
	flex-direction: ${props => props.isReverse ? "row-reverse" : "start"};
	margin-bottom:1em;
`

const ContentSection = styled.div`
	height:100%;
	width:100%;
	display:flex;
	flex-direction: column; 
	justify-content: space-between;
`

const CollectionTitle = styled.div`
	display: flex;
	justify-content: space-between;
	width:100%;
	font-size:2.5em;
`

const CustomerInfo = styled.div`
	font-size:1.2em;
`

const PlagiaristName = styled.div`
	font-size:1.2em;
`

const ImgSection = styled.img`
	min-width:7em;
	min-height:7em;
`

const MarketIcon = styled.img`
	width: 0.7em;
	height: 0.7em;
`

const MarginBox = styled.div`
	width:2em;
`

export default CaseComponent;

