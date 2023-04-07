import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BG from '../statics/images/bg-blue.png'



const ResultCheckPage = () => {
	const navigate = useNavigate();
	return (
		<PageContainer>
			<Title>
                -<br/>
                Check the result
            </Title>
            <InputContainer>
                <InputSection placeholder='Please enter your email'></InputSection>
                {/* 임시로 DONE 버튼을 누르면 result 페이지로 이동하도록 해두었습니다. */}
                <InputBtn onClick={() => navigate('/result')}>DONE</InputBtn> 
            </InputContainer>
		</PageContainer>
	);
}

const PageContainer = styled.div`
	font-family: AkiraExpanded;
    width: 100vw;
	height: 100vh;
	background: url(${BG});
	display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`

const Title = styled.span`
	font-size: 3em;
    margin: 0 auto;
	display: flex;
    text-align: center;
`

const InputContainer = styled.div`
    margin: 3%;
`
const InputSection = styled.input`
    width: 80vh;
    height: 40%;
    border: 0.15em solid black;
    border-radius: 1.7em;
    margin: 0.3%;
    font-family: AkiraExpanded;
    text-align: center;
    font-size: 1.3em;
    &::placeholder {
        color: #B7B7B7;
        text-align: center;
    }
`

const InputBtn = styled.button`
	font-family: AkiraExpanded;
	font-size: 1.2em;
	padding: 2%;
	background: #2B6FD3;
	border-radius: 1em;
	border: none;
    color: white;
    margin: 3%;
    width: 17%;
`


export default ResultCheckPage;

