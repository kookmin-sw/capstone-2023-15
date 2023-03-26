import React from 'react';
import styled from 'styled-components';
import FakeNftImg from '../../statics/images/FakeNftImg.png'
import AuthorArrow from '../../statics/images/author-arrow.png'


const MainCaseComponent = ({i}) => {
    const tmp_name = 'AMERICANO';
    const tmp_email = 'AMERICANO@gmail.com';
    const tmp_sns = 'NFT_AMERICANO';

	return (
        <MCaseContainer isBelowThree={i <= 3}>
            <CaseSection>
                <MCaseImg>
                    <ImgSection src={FakeNftImg} />
                </MCaseImg>
                <TextSection>CASE #{i}</TextSection>

            </CaseSection>   
            <InfoSection>
                <InfoTextSection>
                    <InfoAuthorSmall>AUTHOR</InfoAuthorSmall>
                    <InfoAuthorBig>{tmp_name}</InfoAuthorBig>
                    <InfoAuthorBig>-</InfoAuthorBig>
                    <InfoAuthorSmall>{tmp_email}</InfoAuthorSmall>
                    <InfoAuthorSmall>@{tmp_sns}</InfoAuthorSmall>                    
                </InfoTextSection>
                <InfoBtnSection>
                    <InfoBtnText>MORE</InfoBtnText>
                    <InfoBtnImg src={AuthorArrow} />
                </InfoBtnSection>
                

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
    padding: 10%;
    
`
const ImgSection = styled.img`
    width: 60%;
`
const TextSection = styled.div`
    border-top: 0.15em solid black;
    padding: 3%;
    font-size: 1.8em;
	text-align: left;
`
const InfoTextSection = styled.div`
    padding: 10% 3% 10% 3%;
`
const InfoAuthorBig = styled.div`
    font-size: 2.5em;
`
const InfoAuthorSmall = styled.div`
    font-size: 1em;   
`

const InfoBtnSection = styled.div`
    text-align: right;
    display: flex;
    align-items: center;
	justify-content: flex-end;  
`
const InfoBtnText = styled.div`
    padding: 0% 3% 3% 0%; 
    font-size: 2.3em;

`
const InfoBtnImg = styled.img`
    padding-right: 3%;
`


export default MainCaseComponent;

