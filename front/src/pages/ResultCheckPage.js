import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { dynamoDB, email_params } from '../db.js';
import BG from '../statics/images/bg-blue.png'
import Modal from '../components/Modal';

const ResultCheckPage = () => {
	const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    function handleInputChange(e) {
        setEmail(e.target.value);
    }

    function checkEmail(email) {

        // 이메일이 변경되는 이슈 해결을 위해 한 번 더 할당 해놓음.
        const emailStr = email;
        const params = email_params(email = {email});

        dynamoDB.query(params, function(err, data) {
          if (err) {
              setIsValid(false);
              setModalOpen(true);
          } else {
              if (data.Count == 0) {
                setIsValid(false);
                setModalOpen(true);
              }
              else {
                // 이메일 유효시 result 페이지로 이동
                navigate(`/result/${emailStr}`);
              }
          }
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        checkEmail(email);
    }

    const handleClickModal = () => {
        setModalOpen(false);
        setEmail('');
    };

    const modalProps = {
        title: '🚨 Error 🚨',
        msg1: 'Email is not valid',
        msg2: 'Please check your email',
        onConfirm: handleClickModal
      };

	return (
		<PageContainer>
			<Title>
                -<br/>
                Check the result
            </Title>
            <InputContainer onSubmit={handleFormSubmit}>
                <InputSection placeholder='Please enter your email' value={email} onChange={handleInputChange}></InputSection>
                <InputBtn >DONE</InputBtn> 
                {!isValid && modalOpen &&
                    <Modal props={modalProps} />
                }


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

const InputContainer = styled.form`
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

