import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../statics/images/logo-text.png'

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
        <Logo onClick={()=>navigate('/')}>
            <LogoImgSection src={LogoImg} />
        </Logo>
        <Nav>
            <NavList>
                <NavItem onClick={()=>navigate('/')}>INTRODUCTION</NavItem>
                <NavItem onClick={()=>navigate('/cases')}>CASE</NavItem>
                <NavItem>
                    <ResultBtn onClick={() => navigate('/check')}>Check the result</ResultBtn>
                </NavItem>
            </NavList>
        </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
    height: 4em;
    // width: 100vw;
    font-size: 1em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    width: 30%;
    margin-right: 3vh;
    margin-top: 0.5vh;
`

const LogoImgSection = styled.img`
    width: 35vh;
`
const Nav = styled.nav`
    width: 70%;
`
const NavList = styled.ul`
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 1.8vh;
    font-family: AkiraExpanded;
`

const NavItem = styled.li`
    width: 100%;
    list-style-type: none;
    &:hover {
        color: #00c6ff;
        transition: 0.3s;
    }
`

const ResultBtn = styled.button`
    padding: 1vh 3vh 1vh 3vh;
    margin: 1vh;
    font-size: 1em;
    font-family: AkiraExpanded; 
    border-radius: 3em;
    border: 0.2em solid black;
    background-color: white;
    white-space : nowrap;

    &:hover{
        background: linear-gradient(to right, #4285ec, #0bbafb);
        color: white;
        border: 0.2em solid white;
        // transition: 0.2s; // 애니메이션 임시 주석
    }
`

export default Header;