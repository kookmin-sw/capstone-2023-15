import React from 'react';
import styled from 'styled-components';

const CaseComponent = ({props}) => {
	return (
		<CaseCard>
			<ImgSection src={props.thumbnail_image} />
			<ContentSection>
				<TextSection>
					Collection
				</TextSection>
				<CollectionTitle>
					{props.collection_name}
				</CollectionTitle>
				<ScamContent>
					<HighlightText>&nbsp;{props.scam_length}&nbsp;</HighlightText>
					<br/>suspected
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
	margin-bottom:1em;
	margin: 1em auto;
`

const ContentSection = styled.div`
	height:100%;
	width:100%;
	justify-content: space-between;
`

const TextSection = styled.p`
	font-size: 1.1vw;
	margin-bottom: 0.5vh; 
`

const CollectionTitle = styled.div`
	font-size: 2.6vw;
	overflow: hidden;
    text-overflow: ellipsis;
`

const HighlightText = styled.span`
	color: white;
	background: blue;
	font-size: 2vw;
`

const ScamContent = styled.div`
	font-size: 1.2vw;
	margin-top: 1vh;
	margin-bottom: 3vh;
`

const ImgSection = styled.img`
	margin: 2.5vw 2.5vh 1.5vw 2.5vh;
`

export default CaseComponent;