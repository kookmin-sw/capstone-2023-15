import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { dynamoDB, email_params } from '../db.js';
import BG from '../statics/images/bg-blue.png'
import Modal from '../components/Modal';

const TermsPage = () => {
	return (
		<PageContainer>
			<Title>
                -<br/>
                Terms and Conditions Agreement
            </Title>
            <Content>
                Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
                <br/>The term 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
                <br/><br/>The use of this website is subject to the following terms of use:
                <ContentPre>
                    <br/>   • The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                    <br/>   • Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. 
                    <br/>     You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                    <br/>   • Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, 
                    <br/>     services or information available through this website meet your specific requirements.
                    <br/>   • This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                    <br/>   • All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                    <br/>   • Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
                    <br/>   • From time to time, this website may also include links to other websites. 
                    <br/>     These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). 
                    <br/>     We have no responsibility for the content of the linked website(s).
                </ContentPre>
                
            </Content>
            
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
	font-size: 2vw;
    margin: 0 auto;
	display: flex;
    text-align: center;
`

const Content = styled.div`
    margin: 3vw 10vw;
    background: white;
    padding: 2vw;
    font-size: 0.8vw;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    // overflow: auto;
    width: 70vw;
    font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
`

const ContentPre = styled.pre`
    white-space: normal;
    font-size: 0.6vw;
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


export default TermsPage;