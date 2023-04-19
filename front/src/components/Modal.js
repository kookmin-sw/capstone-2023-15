import React, { useState } from 'react';
import styled from 'styled-components';

const ModalCheckEmail = ({ title, message1, message2, onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          {message1}
          <br/>
          {message2}
        </ModalBody>
        
        <ModalFooter>
          <Button onClick={onConfirm}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: AkiraExpanded;
`;

const ModalContent = styled.div`
  width: 25vw;
  border-radius: 1em;
  background-color: white;
  box-shadow: 0 0.3em 0.5em rgba(0, 0, 0, 0.16);
`;

const ModalHeader = styled.div`
  padding: 0.5em;
  font-size: 1.6vw;
  font-weight: bold;
  text-align: center;
`

const ModalBody = styled.div`
  padding: 1em;
  font-size: 0.9vw;
  text-align: center;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 0.7em;
  font-size: 1em;
  font-weight: bold;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  font-family: AkiraExpanded;
`


export default ModalCheckEmail;