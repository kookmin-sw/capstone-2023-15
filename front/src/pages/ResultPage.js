import React, { Component } from 'react';
import styled from 'styled-components';
import ResultComponent from '../components/ResultComponent';

const ResultPage = () => {
	return (
    <ResultPageRoot>
      <PageTitle>RESULTs</PageTitle>
      <ResultComponent />
    </ResultPageRoot>
	);
}

const ResultPageRoot = styled.div`
  font-family: AkiraExpanded;
  display:flex;
  align-items: center;
  flex-direction: column;
`

const PageTitle = styled.div`
  font-size:4em;
`


export default ResultPage;