import React, { Component } from 'react';
import styled from 'styled-components';
import ResultComponent from '../components/ResultComponents/RequestDoneComponent';
import bgGreen from '../statics/images/bg-green.png'
import bgRed from '../statics/images/bg-red.png'
import bgBlue from '../statics/images/bg-blue.png'

const sampleJson = {
  clientName : "AMERICAN MONKEY",
  sequence:1,
  requestStatus: "DONE",
  requestResult:"unexpected",
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

const BgDict = {
  safe:bgGreen,
  unsafe:bgRed,
  unexpected:bgBlue
}

const ResultPageRoot = styled.div`
  background-image:url(${BgDict[sampleJson.requestResult]});
  height:100vh;
  font-family: AkiraExpanded;
  display:flex;
  align-items: center;
  flex-direction: column;
`

const PageTitle = styled.div`
  margin-top:7vh;
  font-size:4em;
`


export default ResultPage;