import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import FakeNftImg from '../../statics/images/FakeNftImg.png'
import ClientArrow from '../../statics/images/client-arrow.png'


const MainCaseComponent = ({index, props}) => {
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
                    <InfoClientBig>{props.collection_name}</InfoClientBig>
                    <InfoClientSmall>-</InfoClientSmall>
                    <InfoClientSmall>
                        Suspected that there will be <HighlightText>{props.scam_length}</HighlightText> scam NFT
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
    background: #363636;
    width: 100%;
    height: 100%;
    color: white;
    text-align: left;
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
    padding: 3%;
    font-size: 1.8em;
    text-align: left;
    text-size-adjust: auto;
`

const InfoTextSection = styled.div`
    padding: 10% 3% 10% 3%;
`

const InfoClientBig = styled.div`
    font-size: 2.3em;
    overflow: hidden;
    text-overflow: ellipsis;
`

const InfoClientSmall = styled.div`
    font-size: 1em;   
    overflow: hidden;
    text-overflow: ellipsis; 
`

const HighlightText = styled.span`
	color: black;
	background: white;
`

export default MainCaseComponent;

