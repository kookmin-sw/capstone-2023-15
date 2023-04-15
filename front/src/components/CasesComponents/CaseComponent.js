import React from 'react';
import styled from 'styled-components';

const CaseComponent = ({props}) => {
	return (
		<CaseCard>
			<ImgSection src={props.thumbnail_image} />
			<ContentSection>
				Collection
				<CollectionTitle>
					{props.collection_name}
				</CollectionTitle>
				<ScamContent>
					We Found a total of <br/>
					<HighlightText>&nbsp;{props.scam_length} suspected&nbsp;</HighlightText> scam NFTs <br/>
					for this collection !
				</ScamContent>
				
			</ContentSection>
			

		</CaseCard>
	);
}

const CaseCard = styled.div`
	font-family: AkiraExpanded;
	width: 19vw;
	min-height: 45vh;
	background-color: white;
	border: 0.3em solid black;
	padding: 1em;
	display:flex;
    flex-direction: column;
	// flex-direction: ${props => props.isReverse ? "row-reverse" : "start"};
	margin-bottom:1em;
	margin: 1em auto;

`

const ContentSection = styled.div`
	height:100%;
	width:100%;
	justify-content: space-between;
`

const CollectionTitle = styled.div`
	font-size: 2em;
`

const HighlightText = styled.span`
	color: white;
	background: blue;
	font-style: italic;
`

const ScamContent = styled.div`
	font-size: 0.8em;
	margin-top: 1vh;
	margin-bottom: 3vh;
`

const ImgSection = styled.img`
	margin: 2.5em 2.5em 1.5em 2.5em;
`

const MarginBox = styled.div`
	width:2em;
`

export default CaseComponent;

