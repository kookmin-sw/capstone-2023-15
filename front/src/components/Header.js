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
                    <ResultBtn onClick={() => navigate('/')}>Check the result</ResultBtn>
                </NavItem>
            </NavList>
        </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
    // min-width: 1280px;
    max-height: 5em;
	font-family: AkiraExpanded;
    font-size: 1em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    width: 25%;
    margin-right: 5%;
`

const LogoImgSection = styled.img`
    width: 100%;
`
const Nav = styled.nav`
    // background: orange;
    width: 70%;


`
const NavList = styled.ul`
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 1em;
    margin-right: 3%;
    
`

const NavItem = styled.li`
    width: 100%;
    list-style-type: none;
`

const ResultBtn = styled.button`
    padding: 3% 10% 3% 10%;
    margin: 1%;
    font-size: 1em;
    font-family: AkiraExpanded; 
    border-radius: 20px;
    border: 2.5px solid black;
    background-color: white;
    white-space : nowrap;

    &:hover{
        background: linear-gradient(to right, #4285ec, #0bbafb);
        color: white;
        border: none;

    }
`

export default Header;

