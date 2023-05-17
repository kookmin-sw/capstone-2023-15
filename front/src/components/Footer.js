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
                {/* 임시 링크 연결 */}
                <a onClick={()=>navigate('/')}>About</a> | <a>Terms</a>
            </TextSection>
            <IconSection>
                <IconLinkSection onClick={()=>window.open('https://kookmin-sw.github.io/capstone-2023-15/')}>
                    <IconImgSection src={GitIcon}/>
                </IconLinkSection>
                <IconLinkSection onClick={()=>window.open('https://www.notion.so/1ec58d3ee3e443108ee23c9ffbeb89b7?v=98cf90e1a6d5475da32bad06eb82a150')}>
                    <IconImgSection src={NotionIcon}/>
                </IconLinkSection>
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
            
        </BottomSection>
        
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
    height: 9vw;
    background: #3c3c3c;
    padding: 1vw 3vw;
    color: white;
    font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
    margin: 0 auto;
`

const BottomSection = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    font-size: 0.5vw;
`

const Copyright = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const TextSection = styled.div`
    font-size: 0.5vw;
`

const Logo = styled.div`
    width: 10vw;
    padding-right: 0.8vw;
    padding-bottom: 0.3vw;
`

const LogoImgSection = styled.img`
    width: 100%;
`

const TopSection = styled.div`
    width: 100%;
    height: 3vw;
    padding-top: 1.5vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const IconSection = styled.div`
    height: 70%;
    display: flex;
`

const IconLinkSection = styled.div`
    height: 100%;
    width: 2vw;
    display: flex;
    justify-content: center;
`
const IconImgSection = styled.img`
    padding: 0.5vw;
`

export default Footer;