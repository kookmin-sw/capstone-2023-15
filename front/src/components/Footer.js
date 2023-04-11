import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../statics/images/logo-text-white.png'
import GitIcon from '../statics/images/github-mark-white.png'
import NotionIcon from '../statics/images/notion-white.png'

function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
        <TopSection>
            <TextSection>
                <span>
                    <a>About</a> | <a>Terms</a>
                </span>
            </TextSection>
            <IconSection>
                <IconImgSection src={GitIcon} />
                <IconImgSection src={NotionIcon} />
            </IconSection>
        </TopSection>
        <BottomSection>
            <Copyright>
                <Logo>
                    <LogoImgSection src={LogoImg} />
                </Logo>
                ⓒ 2023 ThreeF all rights reserved.
            </Copyright>
            Kookmin Univ. SW 2023 Capstone Design
            
            {/* <TextSection>
                ⓒ 2023 ThreeF all rights reserved <br/>
            </TextSection> */}
        </BottomSection>
        
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
    height: 9em;
    background: #3c3c3c;
    padding: 1vw 3vw 1vw 3vw;
    color: white;
    font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
    margin: 0 auto;
`

const BottomSection = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    font-size: 0.5em;
`

const Copyright = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`


const TextSection = styled.div`
    font-size: 0.5em;
`

const Logo = styled.div`
    width: 25vh;
    padding-right: 1vh;
    padding-bottom: 0.5vh;
`

const LogoImgSection = styled.img`
    width: 100%;
`

const TopSection = styled.div`
    width: 100%;
    height: 7vh;
    padding-top: 2vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const IconSection = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: center;
`
const IconImgSection = styled.img`
    padding: 0.7vh;
`

export default Footer;