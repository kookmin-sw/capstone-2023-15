import React from 'react';
import styled from 'styled-components';

const MainCaseComponent = ({index, props}) => {
    const collection_name = props.collection_name.length > 7 ? props.collection_name.slice(0,7)+'...': props.collection_name
	return (
        <MCaseContainer isBelowThree={index+1 <= 3}>
            <CaseSection>
                <MCaseImg>
                    <ImgSection src={props.thumbnail_image} /> {/* tmp image */}
                </MCaseImg>
                <TextSection>CASE #{index+1}</TextSection>
            </CaseSection>   
            <InfoSection>
                <InfoTextSection>
                    <InfoClientSmall>COLLECTION</InfoClientSmall>
                    <InfoClientBig>{collection_name}</InfoClientBig>
                    <InfoClientSmall>-</InfoClientSmall>
                    <InfoClientSmall>
                        Suspected <br/>
                        <HighlightText>&nbsp;{props.scam_length}&nbsp;scam&nbsp;NFTs&nbsp;</HighlightText><br/>
                        For This Collection
                    </InfoClientSmall>
                </InfoTextSection>             
            </InfoSection>
        </MCaseContainer>
	);
}


const CaseSection = styled.div`
    &:hover{
        display: none;
    }
`

const InfoSection = styled.div`
    display: none;
    visibility: hidden;
    background: #252525;
    height: 100%;
    color: white;
`

const MCaseContainer = styled.div`
    width: 33.33335%; 
    height: 50%;
    text-align: center;
    box-sizing: border-box;
    border-right: 0.3em solid black;
    border-bottom: ${props => ( props.isBelowThree ? '0.3em solid black' : "")};

    &:hover ${InfoSection}{
        visibility: visible;
        display: block;
    }
    &:hover ${CaseSection}{
        display: none;
    }
`

const MCaseImg = styled.div`
    margin: 1em auto;
    height: 20vh;
`

const ImgSection = styled.img`
    width: 10vw;
`

const TextSection = styled.div`
    border-top: 0.15em solid black;
    padding: 3vh;
    font-size: 1.5vw;
`

const InfoTextSection = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
	align-items: center;
    justify-content: center;
    flex-direction: column;
`

const InfoClientBig = styled.div`
    font-size: 2.3vw;
    overflow: hidden;
`

const InfoClientSmall = styled.div`
    font-size: 0.6vw;   
    overflow: hidden;
`

const HighlightText = styled.span`
	color: black;
	background: white;
    font-size: 1.1vw;
`

export default MainCaseComponent;

