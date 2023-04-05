import React, { Component } from 'react';
import styled from 'styled-components';
import RequestDoneComponent from '../components/ResultComponents/RequestDoneComponent';
import RequestUndoneComponent from '../components/ResultComponents/RequestUndoneComponent';

import bgGreen from '../statics/images/bg-green.png'
import bgRed from '../statics/images/bg-red.png'
import bgBlue from '../statics/images/bg-blue.png'

/*
---- parameter matching ----

    DONE - (safe, danger)
    UNDONE - (ignore)
*/
const sampleJson = {
  clientName : "AMERICAN MONKEY",
  sequence:1,
  requestStatus: "DONE", // DONE or UNDONE
  requestResult:"danger", // safe, danger, ignore
  numberOfImagesScanned:3258,
  numberOfMaliciousImages:0
}

const ResultPage = () => {
	return (
    <ResultPageRoot>
      <PageTitle>RESULTs</PageTitle>
      {
        sampleJson.requestStatus === 'DONE' ? <RequestDoneComponent props={sampleJson}/> : <RequestUndoneComponent props={sampleJson}/>
      }
    </ResultPageRoot>
	);
}

const BgDict = {
  safe:bgGreen,
  danger:bgRed,
  ignore:bgBlue
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
  margin-bottom: 1.3%;
  font-size:4em;
`


export default ResultPage;