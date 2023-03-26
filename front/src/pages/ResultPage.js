import React, { Component } from 'react';
import styled from 'styled-components';
import ResultComponent from '../components/ResultComponent';

const sampleJson = {
  clientName : "AMERICAN MONKEY",
  sequence:1,
  requestStatus: "DONE",
  requestResult:"112da",
  numberOfImagesScanned:3258,
  numberOfMaliciousImages:0
}

const ResultPage = () => {
	return (
    <ResultPageRoot>
      <PageTitle>RESULTs</PageTitle>
      <ResultComponent props={sampleJson}/>
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